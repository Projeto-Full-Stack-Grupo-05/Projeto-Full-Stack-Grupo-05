import { Router } from "express";
import { createSalesController } from "../controllers/salesController.controller";

const salesRoutes = Router();
salesRoutes.post("", createSalesController);

export default salesRoutes;
