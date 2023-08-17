import { Router } from "express";
import session from "../controllers/loginController.controller";

const loginRoutes: Router = Router();

loginRoutes.post("", session);
