import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../error";

const ensureUserExistsByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const { email } = req.body;

  const user = await userRepo.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default ensureUserExistsByEmail;