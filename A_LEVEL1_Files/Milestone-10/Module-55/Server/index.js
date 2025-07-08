const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.tvsggog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);
// middleware
app.use(cors());
app.use(express.json());
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		const usersCollection = client.db("usersDb").collection("users");

		app.get("/users", async (req, res) => {
			const data = usersCollection.find();
			const result = await data.toArray();
			res.send(result);
		});
		app.post("/users", async (req, res) => {
			const newUser = req.body;
			console.log(newUser, "new-user");

			const result = await usersCollection.insertOne(newUser);
			console.log(result);
			res.send(result);
		});

		app.delete("/users/:id", async (req, res) => {
			const userId = req.params.id;
			const query = { _id: ObjectId(userId) };

			const result = await usersCollection.deleteOne(query);
			res.send(result);
			console.log(userId);
		});
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
	}
}

app.get("/", (req, res) => {
	res.send("Simple Server Running");
});

app.listen(port, () => {
	console.log(`Server Running  on ${port}`);
});
run().catch(console.dir);
