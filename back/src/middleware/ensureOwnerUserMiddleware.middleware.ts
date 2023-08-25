import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const ensureOwnerUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id = res.locals.userId;
  const userId = req.params.id;

  if (id !== userId) {
    console.log(id);
    console.log(userId);
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
export default ensureOwnerUserMiddleware;
