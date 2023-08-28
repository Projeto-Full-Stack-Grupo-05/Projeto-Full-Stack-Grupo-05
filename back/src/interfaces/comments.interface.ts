import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  commentsSchema,
  commentsSchemaResponse,
} from "../schemas/commentsSchema.schema";

type TCommentResponse = z.infer<typeof commentsSchema>;
type TCommentsResponse = z.infer<typeof commentsSchemaResponse>;

export { TCommentResponse, TCommentsResponse };
