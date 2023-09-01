import { z } from "zod";

export enum Profile {
  Buyer = "buyer",
  Advertiser = "advertiser",
}

const addressSchemaRequest = z.object({
  zip_code: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string().max(6),
  complement: z.string(),
});

export const registerSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
    cellphone: z.string(),
    address: addressSchemaRequest,
    birthdate: z.string(),
    description: z.string(),
    cpf: z.string(),
    profile: z.enum([Profile.Buyer, Profile.Advertiser]).default(Profile.Buyer),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
  });

export type RegisterData = z.infer<typeof registerSchema>;
