import bcrypt from "bcryptjs";
import User from "../../user/models/User.js";
import { RegisterRequestBody } from "../validators/register.validator.js";
import { AppError } from "../../../utils/AppError.js";
import { LoginRequestBody } from "../validators/login.validator.js";
import jwt from "jsonwebtoken";
import { env } from "../../../config/env.js";
import { AuthenticatedUser } from "../interfaces/authenticated-user.interface.ts.js";

export const registerUserService = async (data: RegisterRequestBody) => {
  const { username, email, password } = data;

  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existingUser) {
    if (existingUser.email === email) {
      throw new AppError(409, "Email already Registered");
    }
    if (existingUser.username === username) {
      throw new AppError(409, "Username already exists");
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  return {
    id: newUser._id,
    username: newUser.username,
    email: newUser.email,
  };
};

export const loginUserService = async (data: LoginRequestBody) => {
  const { email, password } = data;
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(401, "Invalid Email or Password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new AppError(401, "Invalid Email or Password");
  }
  const payload: AuthenticatedUser = {
    id: user._id.toString(),
    email: user.email,
  };
  const token = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"],
  });
  return {
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  };
};

export const getCurrentUserService = async (
  authenticatedUser: AuthenticatedUser,
) => {
  const user = await User.findById(authenticatedUser.id);
  if (!user) {
    throw new AppError(404, "User not found.");
  }
  return {
    id: user._id,
    username: user.username,
    email: user.email,
  };
};
