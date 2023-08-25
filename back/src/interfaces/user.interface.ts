import { z } from "zod";

import { DeepPartial } from "typeorm";
import {
  listUserSchema,
  userSchema,
  userSchemaLoginToken,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdateRequest,
} from "../schemas/userSchema.schema";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUser = z.infer<typeof userSchema>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserResponseLoginToken = z.infer<typeof userSchemaLoginToken>;
type TUserUpdateRequest = DeepPartial<TUserRequest>;
type TlistAllUsers = z.infer<typeof listUserSchema>;

export {
  TUserRequest,
  TUser,
  TUserResponse,
  TUserUpdateRequest,
  TlistAllUsers,
  TUserResponseLoginToken
};
