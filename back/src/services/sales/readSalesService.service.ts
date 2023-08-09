import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";
import { TSale, TSalesResponse } from "../../interfaces/sales.interface";
import { salesSchema, salesSchemaResponse } from "../../schemas/salesSchema.schema";

const readSalesService = async (): Promise<TSale[]> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const allSales = await saleRepository.find();

  const returnSale = salesSchemaResponse.parse(allSales);

  return returnSale;
};

export default readSalesService;