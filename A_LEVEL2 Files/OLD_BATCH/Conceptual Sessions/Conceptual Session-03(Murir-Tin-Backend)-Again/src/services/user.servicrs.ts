import { IUser } from "../interface/user.interface";
import User from "../model/user.model";

const createUser = async (userData: IUser): Promise<IUser> => {
	console.log(userData);
	const result = await User.create(userData);
	return result;
};

export const UserServices = { createUser };
