import { z } from "zod";
import Sale from "../entities/sales.entity";

const commentsSchemaRequest = z.object({
  user_id: z.string().max(45),
  sale_id: z.string().max(45),
  text: z.string().max(280),
});

const commentsSchema = commentsSchemaRequest.extend({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const commentsSchemaResponse = z.array(commentsSchema);

const commentsSchemaUpdateRequest = commentsSchema.partial().omit({
  id: true,
  sale_id: true,
  updatedAt: true,
  user_id: true,
  createdAt: true,
});

const saleSchema = z.object({
  id: z.string(),
});

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const returnCreateCommentResponseSchema = z.object({
  text: z.string(),
  sale: saleSchema,
  user: userSchema,
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export {
  commentsSchema,
  commentsSchemaRequest,
  commentsSchemaResponse,
  commentsSchemaUpdateRequest,
  returnCreateCommentResponseSchema
};

