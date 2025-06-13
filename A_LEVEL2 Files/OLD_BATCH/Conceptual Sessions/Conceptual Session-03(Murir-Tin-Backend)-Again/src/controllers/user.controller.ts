import { Request, Response } from "express";
import { UserServices } from "../services/user.servicrs";

const createUser = async (req: Request, res: Response) => {
	try {
		const userData = req.body;
		console.log("userdata", userData);
		const data = await UserServices.createUser(userData);

		res.status(200).json({
			message: "User Creation Done",
			status: "Success",
			data: data,
		});
	} catch (error: any) {
		res.status(500).json({
			message: "User Creation Failed",
			status: "Failed",
			data: error,
		});
	}
};

export const userController = { createUser };
