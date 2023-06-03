import express, { NextFunction, Request, Response } from "express";
import tutorRouter from "./routes/Router";

const app = express();

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", tutorRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

export default app;
