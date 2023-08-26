import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Sale from "../../entities/sales.entity";
import { TSale } from "../../interfaces/sales.interface";
import { salesSchemaResponse } from "../../schemas/salesSchema.schema";
import { TUserResponse } from "../../interfaces/user.interface";
import User from "../../entities/user.entity";

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
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const [sales, total] = await saleRepository
    .createQueryBuilder("sale")
    .leftJoinAndSelect("sale.user", "user")
    .leftJoinAndSelect("sale.gallery", "gallery")
    .skip(skip)
    .take(take)
    .getManyAndCount();

  const totalPages = Math.ceil(total / pageSize);

  const paginatedSales: TSale[] = sales.map((sale) => {
    const userWithoutPassword = {
      ...sale.user,
      password: undefined,
    };
    return {
      ...sale,
      user: userWithoutPassword,
    };
  });

  const pagination: PaginationMetadata = {
    page,
    pageSize,
    total,
    totalPages,
    nextPage: page < totalPages ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null,
  };

  const returnSale: PaginatedSalesResponse = {
    data: paginatedSales,
    pagination,
  };

  return returnSale;
};

export default readSalesService;
