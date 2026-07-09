import { Request, Response } from "express";

export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  res.status(200).json({
    success: true,
    message: "Register Controller Working",
  });
};
