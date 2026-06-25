//server\src\routes\auth.routes.js
import { Router } from "express";
import {
  login,
  forgotPasswordController,
  verifyCodeController,
  resetPasswordController
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { requireRole } from "../middlewares/role.middleware.js";



const router = Router();

// 🔓 LOGIN
router.post("/login", login);

// 🔐 RECOVERY PASSWORD
router.post("/forgot-password", forgotPasswordController);

router.post("/verify-code", verifyCodeController);

router.post("/reset-password", resetPasswordController);

// 🔒 RUTA PROTEGIDA
router.get("/profile", verifyToken, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});


router.get(
  "/admin",
  verifyToken,
  requireRole("ROL001"),
  (req, res) => {
    res.json({
      success: true,
      message: "Panel Administrador",
    });
  }
);

router.get(
  "/supervisor",
  verifyToken,
  requireRole("ROL001", "ROL002"),
  (req, res) => {
    res.json({
      success: true,
      message: "Panel Supervisor",
    });
  }
);

router.get(
  "/operaciones",
  verifyToken,
  requireRole(
    "ROL001",
    "ROL002",
    "ROL003"
  ),
  (req, res) => {
    res.json({
      success: true,
      message: "Panel Operaciones",
    });
  }
);


export default router;