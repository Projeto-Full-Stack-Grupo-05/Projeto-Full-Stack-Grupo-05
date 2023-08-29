import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Comment from "../../entities/comments.entity";
import { TCommentsResponse } from "../../interfaces/comments.interface";

const listCommentBySaleService = async (
  saleId: string
): Promise<TCommentsResponse> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comments: Comment[] = await commentRepository
    .createQueryBuilder("comments")
    .innerJoinAndSelect("comments.sale", "sale")
    .innerJoinAndSelect("comments.user", "user")
    .where("sale.id = :saleId", { saleId })
    .getMany();

  const commentsResponse: TCommentsResponse = comments.map((comment) => ({
    id: comment.id,
    user_id: comment.user.id,
    sale_id: comment.sale.id,
    text: comment.text,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
  }));

  return commentsResponse;
};

export default listCommentBySaleService;
