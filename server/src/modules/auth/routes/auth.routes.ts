import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { validate } from "../../../middleware/validate.middleware.js";
import { registerSchema } from "../validators/register.validator.js";

const router = Router();

router.post("/register", validate(registerSchema), registerUser);

export default router;
