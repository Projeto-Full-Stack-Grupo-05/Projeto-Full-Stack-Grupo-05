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

const salesRoutes = Router();
salesRoutes.post("",ensureBodyValidMiddleware(salesSchemaRequest),ensureAlreadyExistsSalesMiddleware, createSalesController);

salesRoutes.post(
  "",
  ensureBodyValidMiddleware(salesSchemaRequest),
  ensureAlreadyExistsSalesMiddleware,
  createSalesController
);

salesRoutes.get("/:id", ensureIdMiddleware, retrieveSaleController);

salesRoutes.get("", readSalesController);

salesRoutes.patch(
  "/:id",
  ensureBodyValidMiddleware(salesSchemaUpdateRequest),
  ensureIdMiddleware,
  updateSaleController
);

salesRoutes.delete("/:id", ensureIdMiddleware, deleteSaleController);

export default salesRoutes;
