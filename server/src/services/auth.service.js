import jwt from "jsonwebtoken";

export async function loginUser({
  username,
  password,
}) {
  if (
    username === "admin" &&
    password === "123456"
  ) {
    const user = {
      id: "USR001",
      username: "admin",
      role: "ROL001",
    };

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return {
      success: true,
      token,
      user,
    };
  }

  throw new Error("Credenciales incorrectas");
}