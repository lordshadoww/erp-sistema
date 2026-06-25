//src\app.js

import dotenv from "dotenv";
dotenv.config();
console.log(
  "EMAIL_USER:",
  process.env.EMAIL_USER
);


console.log(
  "EMAIL_PASS:",
  !!process.env.EMAIL_PASS
);

import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import roleRoutes from "./routes/role.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS
app.use("/api/auth", authRoutes);
app.use("/roles", roleRoutes);

//const PORT = 3001;
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});