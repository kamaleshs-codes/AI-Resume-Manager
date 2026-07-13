import { Request, Response } from "express";
import { RegisterRequestbody } from "../interfaces/auth.interface.js";
import { registerUserService } from "../services/auth.service.js";

export const registerUser = async (
  req: Request<{}, {}, RegisterRequestbody>,
  res: Response,
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
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
    return;
  }
};
