import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale, { SaleStatus } from "../../entities/sales.entity";
import { AppError } from "../../error";
import { TSaleResponse, TSalesRequest } from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";
import User from "../../entities/user.entity";

const createSalesService = async (
  data: TSalesRequest,
  userId: string
): Promise<TSaleResponse> => {
  const salesRepository: Repository<Sale> = AppDataSource.getRepository(Sale);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  let buyerUser: User | null = null;

  if (data.buyer_id) {
    const buyer = await userRepository.findOne({ where: { id: data.buyer_id } });
    if (!buyer) {
      throw new AppError("Buyer user not found", 404);
    }
    buyerUser = buyer;
    
  }
  


  const existingSale = await salesRepository.findOne({
    where: {
      title: data.title,
      status: SaleStatus.Sold,
    },
  });

  if (existingSale) {
    throw new AppError("This car has already been sold", 400);
  }

  const newSale = salesRepository.create({
    user: user,
    buyer: buyerUser,
    title: data.title,
    img_url: data.img_url,
    color: data.color,
    price: data.price,
    fuel: data.fuel,
    year: data.year,
    description: data.description,
    kilometers: data.kilometers,
    brand: data.brand,
    gallery: data.gallery,
  });

  await salesRepository.save(newSale);

  if (buyerUser) {
    newSale.status = SaleStatus.Sold;
    await salesRepository.save(newSale);
  }

  const saleResponse = salesSchema.parse(newSale);
  if (buyerUser) {
    saleResponse.buyer_id = buyerUser.id;
  }

  return saleResponse;
};

export default createSalesService;
