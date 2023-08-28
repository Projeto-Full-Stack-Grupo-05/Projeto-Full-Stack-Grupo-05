import { Router } from "express";
import ensureIdMiddleware from "../middleware/ensureIdMiddleware";
import {
  deleteCommentController,
  listCommentsController,
} from "../controllers/commentsController.controller";

const commentsRoutes = Router();

commentsRoutes.post("");

commentsRoutes.get("", listCommentsController);

commentsRoutes.patch("/:id");

commentsRoutes.delete("/:id", deleteCommentController);

export default commentsRoutes;
