import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale, { SaleStatus } from "../../entities/sales.entity";
import { AppError } from "../../error";
import { TSaleResponse, TSalesRequest } from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";
import Gallery from "../../entities/gallery.entity";
import User from "../../entities/user.entity";

const createSalesService = async (
  data: TSalesRequest,
  userId: string
): Promise<TSaleResponse> => {
  const salesRepository: Repository<Sale> = AppDataSource.getRepository(Sale);
  const galleryRepository: Repository<Gallery> =
    AppDataSource.getRepository(Gallery);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const newSale = salesRepository.create({
    user: user,
    car_id: data.car_id,
    title: data.title,
    img_url: data.img_url,
    color: data.color,
    price: data.price,
    fuel: data.fuel,
    year: data.year,
    description: data.description,
    kilometers: data.kilometers,
    user_id: userId,
    gallery: data.gallery,
  });

  await salesRepository.save(newSale);

  return salesSchema.parse(newSale);
};

export default createSalesService;
