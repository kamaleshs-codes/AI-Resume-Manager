import User from "../../user/models/User.js";
import { RegisterRequestbody } from "../interfaces/auth.interface.js";

export const registerUserService = async (data: RegisterRequestbody) => {
  const { username, email, password } = data;
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if(existingUser){
    if(existingUser.email === email){
      throw new Error("Email already Registered")
    }
    if(existingUser.username === username){
      throw new Error("Username already exists")
    }
  }
};
