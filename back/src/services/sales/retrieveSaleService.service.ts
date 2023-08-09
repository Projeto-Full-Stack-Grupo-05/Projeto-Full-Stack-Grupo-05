import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";
import { TSale } from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";

const retrieveSaleService = async (saleId: string): Promise<TSale> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const requiredSale: Sale | null = await saleRepository.findOneBy({
    id: saleId,
  });

  if (!requiredSale) {
    throw new AppError("Sale not found", 404);
  }

  const returnSale: TSale = salesSchema.parse(requiredSale);

  return returnSale;
};

export default retrieveSaleService;
