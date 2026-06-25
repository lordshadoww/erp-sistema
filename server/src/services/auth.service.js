//server\src\services\auth.service.js
import jwt from "jsonwebtoken";
import argon2 from "argon2";

import {
  findUserByUsername,
  updateUserByUsername,
  incrementLoginAttempts,
  resetLoginAttempts,
  blockUser,
  updateLastLogin,  
  getEmailByPersona
} from "../adapters/googleSheetsAdapter.js";

import { sendEmail } from "./email.service.js";
import { generateOTP } from "../utils/otp.service.js";


export async function loginUser({ username, password }) {
  const user = await findUserByUsername(username);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  if (user.BLOQUEADO_HASTA) {
  const blockedUntil = new Date(user.BLOQUEADO_HASTA);

  if (blockedUntil > new Date()) {
    throw new Error(
      "Usuario temporalmente bloqueado"
    );
  }
}

  if (user.ESTADO?.toLowerCase() !== "activo") {
    throw new Error("Usuario inactivo");
  }
console.log("Usuario encontrado:", user.USERNAME);
console.log("Intentos actuales:", user.INTENTOS_LOGIN);

  // 🔐 VALIDACIÓN REAL CON ARGON2
  const isValid = await argon2.verify(
    user.PASSWORD_HASH,
    password
  );

  console.log("Password válida:", isValid);
  if (!isValid) {
    const attempts =
      Number(user.INTENTOS_LOGIN || 0) + 1;

    await incrementLoginAttempts(
      username,
      user.INTENTOS_LOGIN
    );

    if (attempts >= 3) {
      await blockUser(username, 15);

      throw new Error(
        "Usuario bloqueado por 15 minutos"
      );
    }

    throw new Error(
      `Credenciales incorrectas. Intento ${attempts}/3`
    );
}
await resetLoginAttempts(username);

await updateLastLogin(username);

  const token = jwt.sign(
    {
      id: user.ID_USUARIO,
      username: user.USERNAME,
      role: user.ID_ROL,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    success: true,
    token,
    user: {
      id: user.ID_USUARIO,
      username: user.USERNAME,
      role: user.ID_ROL,
    },
  };
}


export async function forgotPassword(username) {
  if (!username) {
    throw new Error("Debe indicar un usuario");
  }

  const user = await findUserByUsername(username);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const email = await getEmailByPersona(user.ID_PERSONA);

  console.log("USER FOUND:", user);
  console.log("ID_PERSONA:", user.ID_PERSONA);

  if (!email) {
    throw new Error("Email no encontrado");
  }

  const code = generateOTP();
  const expires = new Date(Date.now() + 10 * 60000);

  await updateUserByUsername(username, {
    TOKEN_RECUPERACION: code,
    EXPIRA_TOKEN: expires.toISOString(),
  });

  await sendEmail({
    to: email,
    subject: "Recuperación de contraseña ERP",
    text: `Tu código es: ${code}`,
  });

  return { success: true, message: "Código enviado" };
}


export async function verifyResetCode(username, code) {
  if (!username) {
    throw new Error("Debe indicar un usuario");
  }

  if (!code) {
    throw new Error("Debe ingresar el código de verificación");
  }

  const user = await findUserByUsername(username);

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  // 👇 AQUÍ VA TU BLOQUE
  if (!user.TOKEN_RECUPERACION) {
    throw new Error("No hay código activo");
  }

  if (user.TOKEN_RECUPERACION !== code) {
    throw new Error("Código inválido");
  }

  if (!user.EXPIRA_TOKEN) {
    throw new Error("Código sin fecha de expiración");
  }

  if (new Date(user.EXPIRA_TOKEN) < new Date()) {
    throw new Error("Código expirado");
  }

  return { success: true };
}



export async function resetPassword(username, newPassword) {

  if (!username) {
    throw new Error(
      "Debe indicar un usuario"
    );
  }

  const user = await findUserByUsername(username);

  if (!user) {
    throw new Error(
      "Usuario no encontrado"
    );
  }

  if (!newPassword) {
    throw new Error(
      "Debe ingresar una nueva contraseña"
    );
  }

  if (newPassword.length < 8) {
    throw new Error(
      "La contraseña debe tener al menos 8 caracteres"
    );
  }

  const hash = await argon2.hash(newPassword);

  await updateUserByUsername(username, {
    PASSWORD_HASH: hash,
    TOKEN_RECUPERACION: "",
    EXPIRA_TOKEN: "",
    FECHA_CAMBIO_PASSWORD: new Date().toISOString(),
    FECHA_ACTUALIZACION: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Contraseña actualizada correctamente",
  };
}