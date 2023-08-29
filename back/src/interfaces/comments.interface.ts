import { z } from "zod";
import {
  commentsSchema,
  commentsSchemaRequest,
  commentsSchemaUpdateRequest,
} from "../schemas/commentsSchema.schema";

export type TComment = z.infer<typeof commentsSchema>;
export type TCommentRequest = z.infer<typeof commentsSchemaRequest>;
export type TCommentResponse = z.infer<typeof commentsSchema>;
export type TCommentUpdateRequest = z.infer<typeof commentsSchemaUpdateRequest>;
