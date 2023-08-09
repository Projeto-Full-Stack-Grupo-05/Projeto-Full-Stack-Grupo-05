import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { TSale, TSalesRequestUpdate } from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";
import { AppError } from "../../error";

const updateSaleService = async (
  saleData: TSalesRequestUpdate,
  saleId: string
): Promise<TSale> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const existingSale: Sale | null = await saleRepository.findOneBy({ id: saleId});

  if (!existingSale) {
    throw new AppError("Sale not found");
  }

  Object.assign(existingSale, saleData);

  const updatedSale: Sale = await saleRepository.save(existingSale);

  const returnSale: TSale = salesSchema.parse(updatedSale);

  return returnSale;
};

export default updateSaleService;
