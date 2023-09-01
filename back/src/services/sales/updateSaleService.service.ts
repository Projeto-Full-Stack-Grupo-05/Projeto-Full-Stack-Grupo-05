import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale, { SaleStatus } from "../../entities/sales.entity";
import { AppError } from "../../error";
import { TSale, TSalesRequestUpdate } from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";
import User from "../../entities/user.entity";

const updateSaleService = async (
  saleData: TSalesRequestUpdate,
  saleId: string
): Promise<TSale> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);
  const userRepository = AppDataSource.getRepository(User);

  const sale: Sale | undefined | null = await saleRepository
    .createQueryBuilder("sale")
    .leftJoinAndSelect("sale.gallery", "gallery")
    .where("sale.id = :saleId", { saleId })
    .getOne();

  if (!sale) {
    throw new AppError("Sale not found");
  }

  if (saleData.buyer_id) {
    saleData.status = SaleStatus.Sold;
  } else if (saleData.buyer_id === "") {
    saleData.status = SaleStatus.Active;
  }

  Object.assign(sale, saleData);

  await saleRepository.save(sale);

  const returnSale: TSale = salesSchema.parse(sale);
  return returnSale;
};

export default updateSaleService;
