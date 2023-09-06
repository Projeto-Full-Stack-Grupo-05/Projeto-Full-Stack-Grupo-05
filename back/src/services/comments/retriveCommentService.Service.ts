import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Comment from "../../entities/comments.entity";
import { AppError } from "../../error";

const retrieveCommentService = async (
  commentId: string
): Promise<Comment | null> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment: Comment | null = await commentRepository.findOne({
    where: { id: commentId },
  });

  if (!comment) {
    throw new AppError("Comment not found");
  }

  return comment;
};

export default retrieveCommentService;
