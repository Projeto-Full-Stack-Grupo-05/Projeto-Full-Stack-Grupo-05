import { z } from "zod";

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

export {
  commentsSchema,
  commentsSchemaRequest,
  commentsSchemaResponse,
  commentsSchemaUpdateRequest
};

