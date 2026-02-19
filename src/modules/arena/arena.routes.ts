import { Router } from "express";
import { validate } from "../../middlewares/validate.middlewares.js";
import { createArenaSchema } from "./arena.schemas.js";
import { arenaController } from "./arena.controller.js";
import { ZodSchema } from "zod/v3";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();

router.post('/', validate(createArenaSchema as any),authMiddleware, arenaController.create);
router.get('/',arenaController.listArenas);
router.post('/join',authMiddleware,arenaController.joinArena);
router.get('/:id',arenaController.getArenaById);

export default router;