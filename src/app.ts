import express from "express";
import tutorRouter from "./routes/tutorRouter";

const app = express();

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", tutorRouter);

export default app;
