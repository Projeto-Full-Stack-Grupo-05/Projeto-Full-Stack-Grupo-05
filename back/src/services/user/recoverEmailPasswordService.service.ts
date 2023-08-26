import { Repository } from "typeorm";
import User from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { TUserResponse } from "../../interfaces/user.interface";
import { AppError } from "../../error";
import { randomUUID } from "node:crypto";
import { emailservice } from "../../utilis/sendEmail.utilis";
import * as bcrypt from "bcryptjs";

export const sendEmailPasswordService = async (
  userEmail: string
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: userEmail,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const resetToken = randomUUID();

  if (resetToken) {
    user.resetToken = resetToken;
    await userRepository.save(user);

    const resetPasswordTemplate = emailservice.resetPasswordTemplate(
      user.email,
      user.name,
      resetToken
    );

    await emailservice.sendEmail(resetPasswordTemplate);
  }

  return user;
};

export const resetPassword = async (
  password: string,
  reset_token: string
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    resetToken: reset_token,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user.password = hashedPassword;

  if (user.resetToken !== null) {
    user.resetToken = null;
    await userRepository.save(user);
  }

  return user;
};
