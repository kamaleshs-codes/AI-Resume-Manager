import { Request, Response, NextFunction } from "express";
import { RegisterRequestbody } from "../interfaces/auth.interface.js";
import { registerUserService } from "../services/auth.service.js";

export const registerUser = async (
  req: Request<{}, {}, RegisterRequestbody>,
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
