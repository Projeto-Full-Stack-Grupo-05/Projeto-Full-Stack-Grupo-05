import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErros } from "./error";
import salesRoutes from "./routes/sales.routes";
import cors from "cors";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/sales", salesRoutes);
app.use("/user", userRoutes);

app.use(handleErros);

export default app;
