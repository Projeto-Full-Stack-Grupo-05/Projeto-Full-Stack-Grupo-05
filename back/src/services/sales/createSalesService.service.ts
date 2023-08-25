import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";
import {
  TSaleResponse,
  TSalesRequest,
  TSalesResponse,
} from "../../interfaces/sales.interface";
import { salesSchema } from "../../schemas/salesSchema.schema";
import Gallery from "../../entities/gallery.entity";

const createSalesService = async (
  data: TSalesRequest
): Promise<TSaleResponse> => {
  const salesRepository: Repository<Sale> = AppDataSource.getRepository(Sale);
  const galleryRepository: Repository<Gallery> = AppDataSource.getRepository(Gallery)

  // const gallery = data.gallery
  // const newGallery: Gallery[] = galleryRepository.create([gallery]) 
  // console.log(newGallery)
  // await galleryRepository.save(newGallery)

  const newSale = salesRepository.create(data);

  const createdSale = await salesRepository.save(newSale);

  const response: TSaleResponse = salesSchema.parse(createdSale);

  return response;
};

export { createSalesService };
