import { Router } from "express";
import { getCurrentUser, loginUser, registerUser } from "../controllers/auth.controller.js";
import { validate } from "../../../middleware/validate.middleware.js";
import { registerSchema } from "../validators/register.validator.js";
import { loginSchema } from "../validators/login.validator.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema),loginUser)
router.get("/me",authenticate,getCurrentUser)

export default router;
