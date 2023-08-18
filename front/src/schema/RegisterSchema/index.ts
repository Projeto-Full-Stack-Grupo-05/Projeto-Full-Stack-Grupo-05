import { z } from "zod";

export enum Profile {
  Buyer = "buyer",
  Advertiser = "advertiser",
}

export const registerSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
    cellphone: z.string(),
    birthdate: z.string(),
    description: z.string(),
    userImg: z.string(),
    cpf: z.string(),
    profile: z.enum([Profile.Buyer, Profile.Advertiser]).default(Profile.Buyer),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
  });

export type RegisterData = z.infer<typeof registerSchema>;
