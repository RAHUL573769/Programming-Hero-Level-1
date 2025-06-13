import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.post("/create-users", userController.createUser);

export const UserRouter = router;
