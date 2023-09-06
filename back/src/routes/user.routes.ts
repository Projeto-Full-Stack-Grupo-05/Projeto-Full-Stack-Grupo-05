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
import ensureAuthMiddleware from "../middleware/ensureAuthMiddleware";
import ensureUserIdExistsMiddleware from "../middleware/ensureUserIdExistsMiddleware.middleware";
import ensureOwnerUserMiddleware from "../middleware/ensureOwnerUserMiddleware.middleware";
import { listAllSalesByUserController } from "../controllers/salesController.controller";

const userRoutes = Router();
userRoutes.post(
  "",
  ensureBodyValidMiddleware(userSchemaRequest),
  createUsersController
);

userRoutes.get("", ensureAuthMiddleware, readUsersController);

userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureUserIdExistsMiddleware,
  retrieveUsersController
);

userRoutes.patch(
  "/:id",
  ensureUserIdExistsMiddleware,
  ensureAuthMiddleware,
  ensureBodyValidMiddleware(userSchemaUpdateRequest),
  ensureOwnerUserMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureUserIdExistsMiddleware,
  ensureAuthMiddleware,
  ensureOwnerUserMiddleware,
  deleteUsersController
);

userRoutes.get("/:id/sales", listAllSalesByUserController)

export default userRoutes;
