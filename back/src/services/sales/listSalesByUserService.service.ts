import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { TSaleResponse } from "../../interfaces/sales.interface";

const listSalesByUserService = async (
  userId: string
): Promise<TSaleResponse[]> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const sales: Sale[] = await saleRepository
    .createQueryBuilder("sales")
    .innerJoinAndSelect("sales.user", "user")
    .leftJoinAndSelect("sales.gallery", "gallery")
    .where("user.id = :userId", { userId })
    .getMany();

  const salesResponse: TSaleResponse[] = sales.map((sale) => ({
    id: sale.id,
    user_id: sale.user.id,
    title: sale.title,
    img_url: sale.img_url,
    color: sale.color,
    price: sale.price,
    description: sale.description,
    year: sale.year,
    kilometers: sale.kilometers,
    brand: sale.brand,
    gallery: sale.gallery
      ? sale.gallery.map((item) => ({
          img_url: item.img_url,
        }))
      : [],
    status: sale.status,
    createdAt: sale.createdAt,
    fuel: sale.fuel,
  }));

  return salesResponse;
};

export default listSalesByUserService;
