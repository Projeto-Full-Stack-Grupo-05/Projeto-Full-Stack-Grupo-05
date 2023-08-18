import { Request, Response } from "express";
import { TUserLoginRequest } from "../interfaces/login.interface";
import loginService from "../services/login/loginService.service";

const session = async (req: Request, res: Response): Promise<Response> => {
  const userLogin: TUserLoginRequest = req.body;

  const { token, user } = await loginService(userLogin);

  return res.json({ token, user });
};

export default session;