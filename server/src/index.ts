import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import repoRoutes from "./routes/repo.routes.js"

dotenv.config();

const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use("/api/repos", repoRoutes)

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "RepoPilot backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});