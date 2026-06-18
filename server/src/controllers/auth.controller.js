//src\controllers\auth.controller.js
import { loginUser } from "../services/auth.service.js";

export async function login(req, res) {
  console.log("BODY:", req.body);

  try {
    const result = await loginUser(req.body);

    res.json(result);
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
}