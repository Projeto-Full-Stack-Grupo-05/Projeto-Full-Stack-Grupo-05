import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale, { SaleStatus } from "../../entities/sales.entity";
import { AppError } from "../../error";
import { TSale, TSalesRequestUpdate } from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";
import User from "../../entities/user.entity";
import { validate as uuidValidate } from "uuid";

const updateSaleService = async (
  saleData: TSalesRequestUpdate,
  saleId: string
): Promise<TSale> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);
  const userRepository: Repository<User> = AppDataSource.getRepository(User); // Add UserRepository

  const sale: Sale | undefined | null = await saleRepository
    .createQueryBuilder("sale")
    .leftJoinAndSelect("sale.gallery", "gallery")
    .where("sale.id = :saleId", { saleId })
    .getOne();

  if (!sale) {
    throw new AppError("Sale not found");
  }

  if (saleData.buyer_id) {
    const buyerUser = await userRepository.findOne({
      where: { id: saleData.buyer_id },
    });

    if (!buyerUser || !uuidValidate(saleData.buyer_id)) {
      throw new AppError("Invalid buyer_id format or user not found");
    }

    sale.status = SaleStatus.Sold;
    await saleRepository.save(sale);
  } else {
    sale.status = SaleStatus.Active;
  }

  const validSale = sale ?? undefined;
  const updatedSaleData: TSalesRequestUpdate = { ...validSale, ...saleData };
  Object.assign(validSale, updatedSaleData);

  await saleRepository.save(validSale);

  const returnSale: TSale = salesSchema.parse(validSale);
  return returnSale;
};

export default updateSaleService;
