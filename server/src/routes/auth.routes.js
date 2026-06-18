//server\src\routes\auth.routes.js
import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

// 🔓 LOGIN (público)
router.post("/login", login);

// 🔒 RUTA PROTEGIDA
router.get("/profile", verifyToken, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

export default router;