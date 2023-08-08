import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";

const deleteSaleService = async (saleId: string): Promise<void> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const existingSale: Sale | null = await saleRepository.findOneBy({id: saleId});

  if (!existingSale) {
    throw new Error("Sale not found"); 
  }

  await saleRepository.softRemove(existingSale);
};

export default deleteSaleService;
