import express from "express";
import authRoutes from "./modules/auth/routes/auth.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("ResumePilot AI backend");
});

app.use(errorHandler);

export default app;
