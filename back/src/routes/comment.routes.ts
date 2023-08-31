import { Router } from "express";
import {
  deleteCommentController,
  listCommentsController,
  createCommentsController,
  updateCommentsController,
  retrieveCommentController,
} from "../controllers/commentsController.controller";
import ensureBodyValidMiddleware from "../middleware/ensureBodyValidMiddleware";
import {
  commentsSchemaRequest,
  commentsSchemaUpdateRequest,
} from "../schemas/commentsSchema.schema";
import ensureAuthMiddleware from "../middleware/ensureAuthMiddleware";

const commentsRoutes = Router();
commentsRoutes.post(
  "",
  ensureBodyValidMiddleware(commentsSchemaRequest),
  createCommentsController
);
commentsRoutes.get("", ensureAuthMiddleware, listCommentsController);

commentsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureBodyValidMiddleware(commentsSchemaUpdateRequest),
  updateCommentsController
);

commentsRoutes.get("/:id", ensureAuthMiddleware, retrieveCommentController);

commentsRoutes.delete("/:id", ensureAuthMiddleware, deleteCommentController);

export default commentsRoutes;
