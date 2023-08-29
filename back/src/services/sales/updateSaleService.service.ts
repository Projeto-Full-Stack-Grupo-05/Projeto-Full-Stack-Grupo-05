import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";
import {
  TSale,
  TSalesRequestUpdate
} from "../../interfaces/sales.interface";
import {
  salesSchema
} from "../../schemas/salesSchema.schema";

const updateSaleService = async (
  saleData: TSalesRequestUpdate,
  saleId: string
): Promise<TSale> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const sale: Sale | undefined | null = await saleRepository
    .createQueryBuilder("sale")
    .leftJoinAndSelect("sale.gallery", "gallery")
    .where("sale.id = :saleId", { saleId })
    .getOne();

  if (!sale) {
    throw new AppError("Sale not found");
  }

  const validSale = sale ?? undefined;
  const updatedSaleData: TSalesRequestUpdate = { ...validSale, ...saleData };
  Object.assign(validSale, updatedSaleData);

  await saleRepository.save(validSale);

  const returnSale: TSale = salesSchema.parse(validSale);
  return returnSale;
};

export default updateSaleService;
