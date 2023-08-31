import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Comment from "../../entities/comments.entity";

const retrieveCommentService = async (
  saleId: string
): Promise<Comment | null> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment: Comment | null = await commentRepository
    .createQueryBuilder("comments")
    .innerJoin("comments.sale", "sales")
    .innerJoin("comments.user", "user")
    .where("sales.id = :saleId", { saleId })
    .getOne();

  if (!comment) {
    throw new AppError("Comment not found");
  }

  return comment;
};

export default retrieveCommentService;
