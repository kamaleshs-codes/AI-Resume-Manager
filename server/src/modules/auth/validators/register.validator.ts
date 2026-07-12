import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters.")
    .max(10, "Username cannot exceed 10 characters."),
  email: z.email("Please enter a valid email address.").trim(),
  password: z
    .string()
    .trim()
    .min(6, "Password must be atleast 6 characters long."),
});
