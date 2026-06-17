export async function loginUser({
  username,
  password,
}) {
  if (
    username === "admin" &&
    password === "123456"
  ) {
    return {
      success: true,

      token: "fake-jwt-token",

      user: {
        id: "USR001",
        username: "admin",
        role: "ROL001",
      },
    };
  }

  throw new Error(
    "Credenciales incorrectas"
  );
}