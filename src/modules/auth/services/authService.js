export async function loginRequest({
  username,
  password,
}) {

  // Simulación API

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (
        username === "admin" &&
        password === "123456"
      ) {

        resolve({
          success: true,
          token: "fake-jwt-token",
          user: {
            id: 1,
            name: "Administrador",
            role: "admin",
          },
        });

      } else {

        reject({
          success: false,
          message:
            "Credenciales incorrectas",
        });

      }

    }, 1500);

  });

}