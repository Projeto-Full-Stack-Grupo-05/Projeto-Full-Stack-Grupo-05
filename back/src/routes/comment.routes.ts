import { Router } from "express";
import {
  deleteCommentController,
  listCommentsController,
  createCommentsController,
} from "../controllers/commentsController.controller";
import ensureBodyValidMiddleware from "../middleware/ensureBodyValidMiddleware";
import { commentsSchemaRequest } from "../schemas/commentsSchema.schema";

const commentsRoutes = Router();
commentsRoutes.post(
  "",
  ensureBodyValidMiddleware(commentsSchemaRequest),
  createCommentsController
);
commentsRoutes.get("", listCommentsController);

commentsRoutes.patch("/:id");

commentsRoutes.delete("/:id", deleteCommentController);

export default commentsRoutes;
