import { Router } from "express";
import { updateAddressController } from "../controllers/addressController.controller";

const addressRoutes = Router();

addressRoutes.patch("/:id", updateAddressController);

export default addressRoutes;
