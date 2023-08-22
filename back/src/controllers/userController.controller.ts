import { Request, Response } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateRequest,
} from "../interfaces/user.interface";
import createUsersService from "../services/user/createUserService.service";
import readUsersService from "../services/user/readUsersService.service";
import retrieveUserService from "../services/user/retrieveUserService.service";
import updateUsersService from "../services/user/updateUserService.service";
import deleteUsersService from "../services/user/deleteUserService.service";
import {
  resetPassword,
  sendEmailPasswordService,
} from "../services/user/recoverEmailPasswordService.service";

export const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body;
  const newUser = await createUsersService(userData);
  return res.status(201).json(newUser);
};

export const readUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await readUsersService();
  return res.json(users);
};

export const retrieveUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;
  const user: TUserResponse = await retrieveUserService(userId);
  return res.json(user);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserUpdateRequest = req.body;
  const userId: string = req.params.id;

  const newUserData: TUserResponse = await updateUsersService(userData, userId);
  return res.json(newUserData);
};

export const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;

  await deleteUsersService(userId);

  return res.status(204).send();
};

export const sendEmailPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email } = req.body;

  await sendEmailPasswordService(email);
  return res.json({ message: "Password reset token sent successfully" });
};

export const recoverEmailPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { password } = req.body;
  const { token } = req.params;

  await resetPassword(password, token);

  return res.json({ message: "password change with sucess" });
};
