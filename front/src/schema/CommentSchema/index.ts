import { z } from "zod";

export const CommentSchema = z.object({
  text: z.string(),
});
