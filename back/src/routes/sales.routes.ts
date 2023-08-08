import { Router } from "express";

import { createSalesController } from "../controllers/salesController.controller";

const salesRoutes = Router();
salesRoutes.post("", createSalesController);

import ensureBodyValidMiddleware from "../middleware/ensureBodyValidMiddleware";
import { deleteSaleController, updateSaleController } from "../controllers/salesController.controller";
import ensureIdMiddleware from "../middleware/ensureIdMiddleware";

const salesRoutes = Router();

salesRoutes.patch('/:id', ensureBodyValidMiddleware(requestSaleSchemaUpadate), ensureIdMiddleware, updateSaleController)
salesRoutes.delete('/:id', ensureIdMiddleware, deleteSaleController)



export default salesRoutes;
