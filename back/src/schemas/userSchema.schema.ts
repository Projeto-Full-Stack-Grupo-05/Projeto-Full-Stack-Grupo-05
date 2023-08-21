import { z } from "zod";

export enum Profile {
  Buyer = "buyer",
  Advertiser = "advertiser",
}

const userSchemaRequest = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  cellphone: z.string(),
  birthdate: z.string(),
  description: z.string(),
  cpf: z.string(),
  profile: z.enum([Profile.Buyer, Profile.Advertiser]).default(Profile.Buyer),
});

const userSchema = userSchemaRequest.extend({
  id: z.string(),
  createdAt: z.string(),
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const listUserSchema = userSchemaResponse.array();

const userSchemaUpdateRequest = userSchema.partial().omit({
  id: true,
});

export {
  userSchemaRequest,
  userSchema,
  userSchemaResponse,
  userSchemaUpdateRequest,
  listUserSchema,
};
