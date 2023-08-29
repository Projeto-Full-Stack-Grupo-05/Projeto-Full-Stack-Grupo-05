import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../error";

const deleteUsersService = async (userId: string): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });
  if (!user) {
    throw new AppError("User not found");
  }

  await userRepository.remove(user!);
};

export default deleteUsersService;
