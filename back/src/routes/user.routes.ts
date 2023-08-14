import { Router } from "express";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/userSchema.schema";
import {
  createUsersController,
  deleteUsersController,
  readUsersController,
  retrieveUsersController,
  updateUserController,
} from "../controllers/userController.controller";
import ensureBodyValidMiddleware from "../middleware/ensureBodyValidMiddleware";

const userRoutes = Router();
userRoutes.post(
  "",
  ensureBodyValidMiddleware(userSchemaRequest),
  createUsersController
);

userRoutes.get("", readUsersController);

userRoutes.get("/:id", retrieveUsersController);

userRoutes.patch(
  "/:id",
  ensureBodyValidMiddleware(userSchemaUpdateRequest),
  updateUserController
);
userRoutes.delete("/:id", deleteUsersController);

export default userRoutes;
