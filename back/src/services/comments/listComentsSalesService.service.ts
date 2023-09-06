import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TCommentResponse,
  TCommentsResponse,
} from "../../interfaces/comments.interface";
import Comment from "../../entities/comments.entity";

const listCommentsService = async (): Promise<TCommentsResponse> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comments = await commentRepository.find({
    relations: ["user", "sale"],
  });

  const commentsResponse: TCommentResponse[] = comments.map((comment) => ({
    id: comment.id,
    user_id: comment.user.id,
    sale_id: comment.sale.id,
    text: comment.text,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
  }));

  return commentsResponse;
};

export default listCommentsService;
