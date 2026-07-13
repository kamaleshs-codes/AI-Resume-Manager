import bcrypt from "bcryptjs";
import User from "../../user/models/User.js";
import { RegisterRequestbody } from "../interfaces/auth.interface.js";
import { AppError } from "../../../utils/AppError.js";

export const registerUserService = async (data: RegisterRequestbody) => {
  const { username, email, password } = data;

  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existingUser) {
    if (existingUser.email === email) {
      throw new AppError(409,"Email already Registered");
    }
    if (existingUser.username === username) {
      throw new AppError(409,"Username already exists");
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
