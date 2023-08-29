import { Router } from "express";
import { createCommentsController } from "../controllers/commentsController.controller";



const commentsRoutes = Router();

commentsRoutes.post(
  "", createCommentsController
);



commentsRoutes.get("/:id", );

commentsRoutes.get("", );

commentsRoutes.patch(
  "/:id",
);

commentsRoutes.delete("/:id", );

export default commentsRoutes;