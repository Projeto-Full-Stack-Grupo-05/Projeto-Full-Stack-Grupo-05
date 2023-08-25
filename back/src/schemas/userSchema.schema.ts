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
  number: z.number().max(6),
  complement: z.string(), 
});

const addressSchema = addressSchemaRequest.extend({
    id: z.string(),
    updatedAt: z.string(),
})

const userSchemaRequest = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  cellphone: z.string(),
  birthdate: z.string(),
  description: z.string(),
  cpf: z.string(),
  profile: z.enum([Profile.Buyer, Profile.Advertiser]).default(Profile.Buyer),
  address: addressSchemaRequest,
});

const userSchema = userSchemaRequest.extend({
  id: z.string(),
  createdAt: z.string(),
  address: addressSchema.pick({
    id: true,
    zip_code: true,
    state: true,
    city: true,
    street: true,
    number: true,
    complement:true,
    updatedAt:true
  })
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const listUserSchema = userSchemaResponse.array();

const userSchemaUpdateRequest = userSchema.partial().omit({
  id: true
});

export {
  userSchemaRequest,
  userSchema,
  userSchemaResponse,
  userSchemaUpdateRequest,
  listUserSchema,
};
