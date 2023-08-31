import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  addressSchema,
  addressSchemaRequest,
} from "../schemas/userSchema.schema";

type TAddress = z.infer<typeof addressSchema>;
type TAddressRequest = z.infer<typeof addressSchemaRequest>;
type TAddressRequestUpdate = DeepPartial<TAddressRequest>;

export { TAddress, TAddressRequest, TAddressRequestUpdate };
