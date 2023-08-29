import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  commentsSchema,
  commentsSchemaResponse,
  commentsSchemaRequest,
  commentsSchemaUpdateRequest,
} from "../schemas/commentsSchema.schema";
import Sale from "../entities/sales.entity";
import User from "../entities/user.entity";

export type TComment = z.infer<typeof commentsSchema>;
export type TCommentsResponse = z.infer<typeof commentsSchemaResponse>;
export type TCommentRequest = z.infer<typeof commentsSchemaRequest>;
export type TCommentResponse = z.infer<typeof commentsSchema>;
export type TCommentUpdateRequest = z.infer<typeof commentsSchemaUpdateRequest>;
