import { Request, Response, NextFunction } from "express";
import { RegisterRequestBody } from "../validators/register.validator.js";
import { registerUserService } from "../services/auth.service.js";
import { LoginRequestBody } from "../validators/login.validator.js";
import { loginUserService } from "../services/auth.service.js";

export const registerUser = async (
  req: Request<{}, {}, RegisterRequestBody>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const result = await registerUserService(req.body);
    res.status(201).json({
      success: true,
      message: "Service Connected Successfully.",
      data: result,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const result = await loginUserService(req.body);
    res.status(200).json({
      success: true,
      message: "Login Successful!",
      data: result,
    });
    return;
  } catch (error) {
    next(error);
  }
};
