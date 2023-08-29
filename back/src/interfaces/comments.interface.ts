import { z } from "zod";
import { commentsSchema, commentsSchemaRequest } from "../schemas/commentsSchema.schema";

export type TCommentRequest = z.infer<typeof commentsSchemaRequest>
export type TCommentResponse = z.infer<typeof commentsSchema>