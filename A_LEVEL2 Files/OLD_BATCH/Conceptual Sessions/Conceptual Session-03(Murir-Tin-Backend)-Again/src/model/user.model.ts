import { model, Schema } from "mongoose";
import { IUser } from "../interface/user.interface";

const userSchema = new Schema<IUser>({
	name: {
		type: String,
	},

	email: { type: String },
	age: {
		type: Number,
	},
	photo: { type: String },
	userStatus: { type: String, enum: ["active", "inactive"] },
	role: { type: String, enum: ["user", "admin"] },
});

const User = model<IUser>("User", userSchema);

export default User;
// role: "user" | "admin";
// userStatus: "active" | "inactive";
