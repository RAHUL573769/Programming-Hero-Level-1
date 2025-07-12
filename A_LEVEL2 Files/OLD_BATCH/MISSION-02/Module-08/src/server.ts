import mongoose from "mongoose";
import config from "./config";

async function server() {
	try {
		mongoose.connect(config.DATABASE_URL as string);

		console.log("Database Connected");
	} catch (error) {
		console.log(error);
	}
}

server();
