import { Repository } from "typeorm";

import User from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/userSchema.schema";

const updateUsersService = async (
  userData: TUserUpdateRequest,
  userId: string
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });
  await userRepository.save(newUserData);

  const returnUser: TUserResponse = userSchemaResponse.parse(newUserData);

  return returnUser;
};

export default updateUsersService;
