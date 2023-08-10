import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErros } from "./error";
import salesRoutes from "./routes/sales.routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/sales", salesRoutes);

app.use(handleErros);

export default app;
