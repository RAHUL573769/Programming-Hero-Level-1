import express, { Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./routes/user.routes";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/users", UserRouter);
app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});

export default app;
