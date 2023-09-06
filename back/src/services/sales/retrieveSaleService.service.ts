import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";
import { TSale } from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";

const retrieveSaleService = async (saleId: string): Promise<TSale> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const requiredSale: Sale | null = await saleRepository.findOne({
    relations: { gallery: true, user: true },
    where: {
      id: saleId,
    },
  });

  if (!requiredSale) {
    throw new AppError("Sale not found", 404);
  }

  const saleWithUser = {
    ...salesSchema.parse(requiredSale),
    user: {
      ...requiredSale.user,
      password: undefined,
      id:undefined,
      
    },
  };

  return saleWithUser;
};

export default retrieveSaleService;
