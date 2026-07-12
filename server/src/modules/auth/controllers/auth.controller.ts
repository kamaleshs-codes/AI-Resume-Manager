import { Request, Response } from "express";
import { RegisterRequestbody } from "../interfaces/auth.interface.js";

export const registerUser = async (
  req: Request<{}, {}, RegisterRequestbody>,
  res: Response,
): Promise<void> => {
  const { username, email, password } = req.body;
  res.status(200).json({
    success: true,
    message: "Registration Successful",
    data: {
      username,
      password,
      email,
    },
  });
};
