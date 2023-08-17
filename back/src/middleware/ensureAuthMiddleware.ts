import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error";

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  const tokenToVerify = token.split(" ")[1];

  jwt.verify(
    tokenToVerify,
    process.env.SECRET_KEY!,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }
      res.locals.userId = decoded.sub;
      return next();
    }
  );
};

export default ensureAuthMiddleware;
