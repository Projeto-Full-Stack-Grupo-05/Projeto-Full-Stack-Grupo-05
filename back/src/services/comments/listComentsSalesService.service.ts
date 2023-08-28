import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TCommentsResponse } from "../../interfaces/comments.interface";
import { commentsSchemaResponse } from "../../schemas/commentsSchema.schema";
import Comment from "../../entities/comments.entity";

const listCommentsService = async (): Promise<TCommentsResponse> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comments: Comment[] = await commentRepository.find();

  const returnComments: TCommentsResponse =
    commentsSchemaResponse.parse(comments);

  return returnComments;
};

export default listCommentsService;
