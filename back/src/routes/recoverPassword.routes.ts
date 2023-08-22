import { Router } from "express";
import {
  recoverEmailPasswordController,
  sendEmailPasswordController,
} from "../controllers/userController.controller";

const recoverPassword: Router = Router();

recoverPassword.post("", sendEmailPasswordController);

recoverPassword.patch("/:token", recoverEmailPasswordController);

export default recoverPassword;
