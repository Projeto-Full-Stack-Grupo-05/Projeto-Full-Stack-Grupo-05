import { Repository } from "typeorm";
import User from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const deleteUsersService = async (userId: string): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });
  if (!user) {
    throw new Error("User not found");
  }

  await userRepository.remove(user!);
};

export default deleteUsersService;
