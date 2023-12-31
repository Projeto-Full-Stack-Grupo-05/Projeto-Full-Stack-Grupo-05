import { z } from "zod";

import { DeepPartial } from "typeorm";
import {
  listUserSchema,
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdateRequest,
} from "../schemas/userSchema.schema";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUser = z.infer<typeof userSchema>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserRequestUp = z.infer<typeof userSchemaUpdateRequest>;
type TUserUpdateRequest = DeepPartial<TUserRequestUp>;
type TlistAllUsers = z.infer<typeof listUserSchema>;

export {
  TUserRequest,
  TUser,
  TUserResponse,
  TUserUpdateRequest,
  TlistAllUsers,
};
