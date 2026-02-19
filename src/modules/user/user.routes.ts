import { Router } from "express";
import { userController } from "./user.controller.js";
import { validate } from "../../middlewares/validate.middlewares.js";
import { loginSchema, registerSchema } from "./user.schemas.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router()

router.post('/register', validate(registerSchema as any), userController.register);
router.post('/login', validate(loginSchema as any), userController.login);
router.get('/getProfile',authMiddleware,userController.profile);

export default router;