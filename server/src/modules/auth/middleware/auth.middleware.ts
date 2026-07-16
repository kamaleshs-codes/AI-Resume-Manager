import { Request, Response, NextFunction } from "express";
import { AppError } from "../../../utils/AppError.js";
import jwt from "jsonwebtoken";
import { env } from "../../../config/env.js";
import { AuthPayload } from "../types/auth-payload.js";


export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError(401, "Access token is required");
  }
  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer" || !token) {
    throw new AppError(401, "Invalid authorization header");
  }
  const decoded = jwt.verify(
    token,
    env.JWT_SECRET
  ) as AuthPayload
};
