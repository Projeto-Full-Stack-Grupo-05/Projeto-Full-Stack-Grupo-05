import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  cellphone: z.string(),
  birthdate: z.string(),
  description: z.string(),
  userImg: z.string(),
  profile: z.string(),
});

export type RegisterData = z.infer<typeof registerSchema>;
