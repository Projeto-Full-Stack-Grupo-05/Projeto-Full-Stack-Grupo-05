import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Comment from "../../entities/comments.entity";
import { AppError } from "../../error";
import { TComment, TCommentResponse } from "../../interfaces/comments.interface";
import { commentsSchema } from "../../schemas/commentsSchema.schema";

const updateCommentService = async (
  newText: string,
  commentId: string
): Promise<TCommentResponse> => {
  const commentsRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const currentComment: Comment | null | undefined =
    await commentsRepository.findOne({
      where: { id: commentId },
    });

  if (!currentComment) {
    throw new AppError("Comment not found");
  }

  currentComment.text = newText;

  await commentsRepository.save(currentComment);

  const returnComment: TComment = commentsSchema.parse(currentComment);

  return returnComment;
};

export default updateCommentService;
