import { NextFunction, Request, Response } from "express";
import { validate as uuidValidate } from "uuid";
import { Repository } from "typeorm";
import Sale from "../entities/sales.entity";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";

const ensureBuyerIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const buyer_id = req.body.buyer_id;

  if (buyer_id && !uuidValidate(buyer_id)) {
    throw new AppError("Invalid buyer_id format", 400);
  }

  if (buyer_id) {
    const salesRepository: Repository<User> = AppDataSource.getRepository(User);

    const buyer = await salesRepository.findOne({ where: { id: buyer_id } });
    if (!buyer) {
      throw new AppError("Buyer not found", 404);
    }
  }

  next();
};

export default ensureBuyerIdMiddleware;
