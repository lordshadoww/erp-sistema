//src\app.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS
app.use("/api/auth", authRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});