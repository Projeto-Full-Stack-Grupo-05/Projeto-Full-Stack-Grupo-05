import { Repository } from "typeorm";
import User from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { TlistAllUsers } from "../../interfaces/user.interface";
import { listUserSchema } from "../../schemas/userSchema.schema";

const readUsersService = async (): Promise<TlistAllUsers> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find({
    relations: { address: true },
  });
  const returnUsers: TlistAllUsers = listUserSchema.parse(users);

  return returnUsers;
};

export default readUsersService;
