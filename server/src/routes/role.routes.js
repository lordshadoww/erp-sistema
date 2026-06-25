import express from "express";

import {
  getRolesController,
  getRoleByIdController,
  getActiveRolesController
} from "../controllers/role.controller.js";


import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, getRolesController);
router.get("/active", verifyToken, getActiveRolesController);
router.get("/:id", verifyToken, getRoleByIdController);

export default router;