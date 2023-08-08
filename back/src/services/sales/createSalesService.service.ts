import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";
import {
  TSaleResponse,
  TSalesRequest,
  TSalesResponse,
} from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";

const createSalesService = async (
  data: TSalesRequest
): Promise<TSaleResponse> => {
  const salesRepository = AppDataSource.getRepository(Sale);

  const newSale = salesRepository.create(data);

  const createdSale = await salesRepository.save(newSale);

  const response: TSaleResponse = salesSchema.parse(createdSale);

  return response;
};

export { createSalesService };
