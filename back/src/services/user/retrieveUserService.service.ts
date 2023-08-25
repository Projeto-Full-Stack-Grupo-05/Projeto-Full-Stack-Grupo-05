import { Repository } from "typeorm";
import { AppError } from "../../error";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { TUserResponse } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/userSchema.schema";

const retrieveUserService = async (userId: string): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const returnUser: TUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};

export default retrieveUserService;
