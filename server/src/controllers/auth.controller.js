//src\controllers\auth.controller.js
import {
  loginUser,
  forgotPassword,
  verifyResetCode,
  resetPassword
} from "../services/auth.service.js";


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

export async function forgotPasswordController(
  req,
  res
) {
  try {

    const { username } = req.body;

    if (!username?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Debe ingresar un usuario",
      });
    }

    const result = await forgotPassword(
      username
    );

    res.json(result);

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function verifyCodeController(
  req,
  res
) {
  console.log("VERIFY BODY:", req.body);

  try {

    const { username, code } = req.body;

    if (!username?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Debe ingresar un usuario",
      });
    }

    if (!code?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Debe ingresar el código",
      });
    }

    const result = await verifyResetCode(
      username,
      code
    );

    res.json(result);

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function resetPasswordController(
  req,
  res
) {
  console.log("RESET BODY:", req.body);

  try {

    const { username, newPassword } =
      req.body;

    if (!username?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Debe ingresar un usuario",
      });
    }

    if (!newPassword?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Debe ingresar una contraseña",
      });
    }

    const result = await resetPassword(
      username,
      newPassword
    );

    res.json(result);

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}