import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Comment from "../../entities/comments.entity";
import {
  TCommentRes,
  TCommentsResponse,
} from "../../interfaces/comments.interface";

const listCommentBySaleService = async (
  saleId: string
): Promise<TCommentRes[]> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comments: Comment[] = await commentRepository
    .createQueryBuilder("comments")
    .innerJoinAndSelect("comments.sale", "sale")
    .innerJoinAndSelect("comments.user", "user")
    .where("sale.id = :saleId", { saleId })
    .getMany();

  const commentsResponse: TCommentRes[] = comments.map((comment) => ({
    id: comment.id,
    user: {
      id: comment.user.id,
      name: comment.user.name,
    },
    sale_id: comment.sale.id,
    text: comment.text,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
  }));

  return commentsResponse;
};

export default listCommentBySaleService;
