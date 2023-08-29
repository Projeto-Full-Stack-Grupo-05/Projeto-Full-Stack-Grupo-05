import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Address from "../../entities/address.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
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
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const user: User | undefined | null = await userRepository
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.address", "address")
    .where("user.id = :userId", { userId })
    .getOne();

  if (!user) {
    throw new AppError("User not found");
  }

  const validUser = user ?? undefined;

  if (userData.address) {
    if (validUser.address) {
      Object.assign(validUser.address, userData.address);
    } else {
      const newAddress = addressRepository.create(userData.address);
      validUser.address = newAddress;
    }
  }

  Object.assign(validUser, userData);

  await userRepository.save(validUser);

  const returnUser: TUserResponse = userSchemaResponse.parse(validUser);

  return returnUser;
};

export default updateUsersService;
