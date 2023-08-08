import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
// import { TSaleRequestUpdate, TSale } from "../../interfaces/sale.interface";
// import { saleSchema } from "../../schemas/sale.schema";

const updateSaleService = async (
  saleData: TSaleRequestUpdate,
  saleId: string
): Promise<TSale> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const existingSale: Sale | null = await saleRepository.findOneBy({ id: saleId});

  if (!existingSale) {
    throw new Error("Sale not found");
  }

  Object.assign(existingSale, saleData);

  const updatedSale: Sale = await saleRepository.save(existingSale);

  const returnSale: TSale = saleSchema.parse(updatedSale);

  return returnSale;
};

export default updateSaleService;
