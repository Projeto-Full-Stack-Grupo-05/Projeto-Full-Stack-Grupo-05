import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
import { IToken, TUserLoginRequest } from "../../interfaces/login.interface";
import { TUserResponse } from "../../interfaces/user.interface";

const loginService = async (
  loginData: TUserLoginRequest
): Promise<{ token: string; user: TUserResponse }> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid Credentials", 404);
  }

  const passwordMatch: boolean = await bcrypt.compare(
    loginData.password,
    user.password
  );

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: IToken = jwt.sign(
    {
      email: user.email,
      id: user.id,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: String(process.env.EXPIRES_IN),
      subject: String(user.id),
    }
  );

  const userData: TUserResponse = {
    name: user.name,
    email: user.email,
    id: user.id,
    cellphone: user.cellphone,
    birthdate: user.birthdate,
    profile: user.profile,
    description: user.description,
    createdAt: user.createdAt,
    userImg: user.userImg,
  }

  return {token, user: userData};
};

export default loginService;
