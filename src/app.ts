import express from "express";
import { loggerMiddleware } from "./middleware/logger.middleware";
import { errorMiddleware } from "./middleware/error.middleware";
import branchesRouter from "./modules/branches/branches.routes";
const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use("/api/branches", branchesRouter);

app.use(errorMiddleware);

export default app;
