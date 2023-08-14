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
