import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { AppError } from "../../error";
import { TSale, TSalesResponse } from "../../interfaces/sales.interface";
import { salesSchemaResponse } from "../../schemas/salesSchema.schema";

interface PaginationMetadata {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

interface PaginatedSalesResponse {
  data: TSale[];
  pagination: PaginationMetadata;
}

const readSalesService = async (
  page: number = 1,
  pageSize: number = 10
): Promise<PaginatedSalesResponse> => {
  const saleRepository: Repository<Sale> = AppDataSource.getRepository(Sale);

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const [sales, total] = await saleRepository.findAndCount({
    skip,
    take,
  });

  const totalPages = Math.ceil(total / pageSize);

  const pagination: PaginationMetadata = {
    page,
    pageSize,
    total,
    totalPages,
  };

  const returnSale: PaginatedSalesResponse = {
    data: salesSchemaResponse.parse(sales),
    pagination,
  };

  return returnSale;
};

export default readSalesService;
