import mongoose from "mongoose";
import app from "./app";
import config from "./config";
const port = 5000;
async function server() {
	try {
		await mongoose.connect(config.DATABASE_ONLINE as string);
		console.log("Database Connected");
		app.listen(port, () => {
			console.log(`Example app listening on port ${config.PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

server();
