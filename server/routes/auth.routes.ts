import { Router } from "express";
import { loginHandler, profileHandler } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";

const router = Router();

router.post("/login", loginHandler);

//Primero llega a la ruta, luego verifica si esta autenticado y luego se obtienen los datos
router.get("/profile", requireAuth, profileHandler);

export default router;
