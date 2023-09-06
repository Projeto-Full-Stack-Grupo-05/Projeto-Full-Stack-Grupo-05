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

const commentsSchemaUpdateRequest = z.object({
  text: z.string().nonempty(),
});

export {
  commentsSchema,
  commentsSchemaRequest,
  commentsSchemaResponse,
  commentsSchemaUpdateRequest
};

