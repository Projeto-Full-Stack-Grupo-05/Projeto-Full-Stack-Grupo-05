import cors from "cors";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { handleErros } from "./error";
import commentsRoutes from "./routes/comment.routes";
import loginRoutes from "./routes/login.routes";
import recoverPassword from "./routes/recoverPassword.routes";
import salesRoutes from "./routes/sales.routes";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/sales", salesRoutes);
app.use("/resetPassword", recoverPassword);
app.use("/comments", commentsRoutes);

app.use(handleErros);

export default app;
