import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { TSales, TSalesRequestUpdate } from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";

const updateSaleService = async (
  saleData: TSalesRequestUpdate,
  saleId: string
): Promise<TSales> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const existingSale: Sale | null = await saleRepository.findOneBy({ id: saleId});

  if (!existingSale) {
    throw new Error("Sale not found");
  }

  Object.assign(existingSale, saleData);

  const updatedSale: Sale = await saleRepository.save(existingSale);

  const returnSale: TSales = salesSchema.parse(updatedSale);

  return returnSale;
};

export default updateSaleService;
