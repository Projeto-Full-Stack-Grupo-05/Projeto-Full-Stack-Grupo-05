import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import Comment from "../../entities/comments.entity";

const deleteCommentService = async (commentId: string): Promise<void> => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const comment = await commentRepository.findOneBy({ id: commentId });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  await commentRepository.remove(comment);
};

export default deleteCommentService
