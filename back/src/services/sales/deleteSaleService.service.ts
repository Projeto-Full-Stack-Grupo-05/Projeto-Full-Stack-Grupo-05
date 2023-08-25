import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";

const deleteSaleService =  async (salesId: string): Promise<void> => {
  const salesRepository = AppDataSource.getRepository(Sale);
  const sales = await salesRepository.findOneBy({ id: salesId });

  if (!sales) {
    throw new AppError("Sale not found", 404);
  }

  await salesRepository.remove(sales);
};

export default deleteSaleService;
