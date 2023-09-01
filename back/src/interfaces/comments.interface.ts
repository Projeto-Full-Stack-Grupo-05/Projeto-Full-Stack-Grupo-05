import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  commentsSchema,
  commentsSchemaResponse,
  commentsSchemaRequest,
  commentsSchemaUpdateRequest,
  commentSchema,
  returnCreateCommentResponseSchema,

} from "../schemas/commentsSchema.schema";
import Sale from "../entities/sales.entity";
import User from "../entities/user.entity";

export type TComment = z.infer<typeof commentsSchema>;
export type TCommentsResponse = z.infer<typeof commentsSchemaResponse>;
export type TCommentRes = z.infer<typeof commentSchema>;
export type TCommentRequest = z.infer<typeof commentsSchemaRequest>;
export type TCommentResponse = z.infer<typeof commentsSchema>;
export type TCommentUpdateRequest = z.infer<typeof commentsSchemaUpdateRequest>;
export type TCreateCommentResponse = z.infer<typeof returnCreateCommentResponseSchema>;
