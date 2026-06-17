//src\modules\auth\services\authService.js
import { post } from "@/services/api/httpMethods";

import {
  AUTH_ENDPOINTS,
} from "@/services/api/endpoints";

export async function loginRequest(
  credentials
) {
  // 🔥 MODO MOCK TEMPORAL

  if (
    import.meta.env.VITE_USE_MOCK ===
    "true"
  ) {
    return mockLogin(credentials);
  }

  // 🔥 BACKEND REAL

  return post(
    AUTH_ENDPOINTS.LOGIN,
    credentials
  );
}

// =======================
// MOCK LOGIN
// =======================

async function mockLogin({
  username,
  password,
}) {
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        if (
          username === "admin" &&
          password === "123456"
        ) {
          resolve({
            success: true,

            token:
              "fake-jwt-token",

            user: {
              id: 1,
              name:
                "Administrador",
              role: "admin",
            },
          });
        } else {
          reject(
            new Error(
              "Credenciales incorrectas"
            )
          );
        }
      }, 1500);
    }
  );
}