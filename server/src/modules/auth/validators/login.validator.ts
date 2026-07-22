import { z } from "zod";

export const loginSchema = z.object({
  email: z.email().min(1, "Email is required").trim(),
  password: z.string().min(1, "Password is required"),
});

export type LoginRequestBody = z.infer<typeof loginSchema>;
