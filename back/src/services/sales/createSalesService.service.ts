import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";

const createSalesService = async (): Promise<any> => {
  const salesRepository = AppDataSource.getRepository(Sale);
};

export { createSalesService };
