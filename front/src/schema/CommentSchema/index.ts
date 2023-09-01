import { z } from "zod";

export const CommentSchema = z.object({
  text: z.string(),
});

const user = z.object({
  id: z.string(),
  name: z.string(),
});

export const CommentsSchema = z.object({
  id: z.string(),
  user: user,
  sale_id: z.string(),
  text: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
