import { Router } from "express";
import {
  deleteCommentController,
  listCommentsController,
  createCommentsController,
  listAllCommentsBySalesController,
} from "../controllers/commentsController.controller";

const commentsRoutes = Router();
commentsRoutes.post("", createCommentsController);
commentsRoutes.get("", listCommentsController);

commentsRoutes.patch("/:id");

commentsRoutes.delete("/:id", deleteCommentController);

export default commentsRoutes;
