import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { TSale, TSalesResponse } from "../../interfaces/sales.interface";
import { salesSchemaResponse } from "../../schemas/salesSchema.schema";

interface PaginationMetadata {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  nextPage: number | null;
  prevPage: number | null;
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
    nextPage: page < totalPages ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null,
  };

  const returnSale: PaginatedSalesResponse = {
    data: salesSchemaResponse.parse(sales),
    pagination,
  };

  return returnSale;
};

export default readSalesService;
