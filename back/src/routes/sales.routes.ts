import { Router } from "express";

import { createSalesController } from "../controllers/salesController.controller";
import ensureBodyValidMiddleware from "../middleware/ensureBodyValidMiddleware";
import {
  deleteSaleController,
  updateSaleController,
} from "../controllers/salesController.controller";
import ensureIdMiddleware from "../middleware/ensureIdMiddleware";
import {
  salesSchemaRequest,
  salesSchemaUpdateRequest,
} from "../schemas/salesSchema.schema";
import ensureAlreadyExistsSalesMiddleware from "../middleware/ensureAlreadyExistsSalesMiddleware.middleware";

const salesRoutes = Router();
salesRoutes.post(
  "",
  ensureBodyValidMiddleware(salesSchemaRequest),
  ensureAlreadyExistsSalesMiddleware,
  createSalesController
);

salesRoutes.patch(
  "/:id",
  ensureBodyValidMiddleware(salesSchemaUpdateRequest),
  ensureIdMiddleware,
  updateSaleController
);
salesRoutes.delete("/:id", ensureIdMiddleware, deleteSaleController);

export default salesRoutes;
