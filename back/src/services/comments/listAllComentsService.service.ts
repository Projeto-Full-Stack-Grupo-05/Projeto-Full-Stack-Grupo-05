import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Comment from "../../entities/comments.entity";

const listCommentBySaleService = async (
  saleId: string
): Promise<Comment[] | null> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comments: Comment[] | null = await commentRepository
    .createQueryBuilder("comments")
    .innerJoinAndSelect("comments.sale", "sale")
    .where("sale.id = :saleId", { saleId })
    .getMany();

  return comments;
};

export default listCommentBySaleService;
