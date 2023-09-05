import { Router } from "express";

import {
  createSalesController,
  deleteSaleController,
  readSalesController,
  retrieveSaleController,
  updateSaleController,
} from "../controllers/salesController.controller";

import ensureAlreadyExistsSalesMiddleware from "../middleware/ensureAlreadyExistsSalesMiddleware.middleware";
import ensureBodyValidMiddleware from "../middleware/ensureBodyValidMiddleware";
import ensureIdMiddleware from "../middleware/ensureIdMiddleware";
import {
  salesSchemaRequest,
  salesSchemaUpdateRequest,
} from "../schemas/salesSchema.schema";
import { listAllCommentsBySalesController } from "../controllers/commentsController.controller";
import ensureBuyerIdMiddleware from "../middleware/ensureBuyerIdMiddleware.middleware";

const salesRoutes = Router();

salesRoutes.post(
  "",
  ensureBuyerIdMiddleware,
  ensureBodyValidMiddleware(salesSchemaRequest),
  createSalesController
);

salesRoutes.get("/:id/comments", listAllCommentsBySalesController);

salesRoutes.get("/:id", ensureIdMiddleware, retrieveSaleController);

salesRoutes.get("", readSalesController);

salesRoutes.patch(
  "/:id",
  ensureBuyerIdMiddleware,
  ensureBodyValidMiddleware(salesSchemaUpdateRequest),
  ensureIdMiddleware,
  updateSaleController
);

salesRoutes.delete("/:id", ensureIdMiddleware, deleteSaleController);

export default salesRoutes;
