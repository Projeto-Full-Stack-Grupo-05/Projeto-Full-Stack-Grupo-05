import User from "../../entities/user.entity";
import Address from "../../entities/address.entity";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { AppError } from "../../error";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/userSchema.schema";

const createUsersService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const { email } = userData;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError("user already exists", 409);
  }

  userData.password = await hash(userData.password, 10);

  const newAddress: Address = addressRepository.create({
    street: userData.address.street,
    zip_code: userData.address.zip_code,
    number: userData.address.number,
    city: userData.address.city,
    complement: userData.address.complement,
    state: userData.address.state,
  });

  await addressRepository.save(newAddress);

  const user: User = userRepository.create({
    ...userData,
    address: newAddress,
  });

  await userRepository.save(user);

  const returnUser: TUserResponse = userSchemaResponse.parse(user);


  return returnUser;
};

export default createUsersService;
