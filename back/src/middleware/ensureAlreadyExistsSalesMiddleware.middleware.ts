import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Sale from "../entities/sales.entity";

const ensureAlreadyExistsSalesMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const validateSales = req.body;
  req.body = validateSales;
  const { id } = req.body;
  if (id) {
    const contactRepository = AppDataSource.getRepository(Sale);
    const existingSales = await contactRepository.findOne({
      where: { id },
    });
    if (existingSales) {
      return res.status(409).json({ message: "Sales already exists" });
    }
  }

  return next();
};
export default ensureAlreadyExistsSalesMiddleware;
