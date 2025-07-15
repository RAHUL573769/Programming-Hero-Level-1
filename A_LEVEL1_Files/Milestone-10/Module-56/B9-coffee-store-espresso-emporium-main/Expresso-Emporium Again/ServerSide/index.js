const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tvsggog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

// console.log(uri);
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
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });

		const coffeeCollection = client
			.db("coffeeDb")
			.collection("coffeeCollection");
		app.get("/getCoffee", async (req, res) => {
			const cursor = coffeeCollection.find();
			const data = await cursor.toArray();
			res.send(data);
		});
		app.get("/getCoffee/:id", async (req, res) => {
			const id = req.params.id;
			const query1 = { _id: new ObjectId(id) };
			const result = await coffeeCollection.findOne(query1);
			res.send(result);
		});
		app.post("/addCoffee", async (req, res) => {
			const data = req.body;
			const result = await coffeeCollection.insertOne(data);
			res.send(result);
			console.log(data);
		});
		app.put("/updateCoffee/:id", async (req, res) => {
			const id = req.params.id;
			const filter = { _id: ObjectId(id) };
			const options = { upsert: true };
			const updatedCoffeeData = req.body;
			const newCoffee = { $set: updatedCoffeeData.name };
			const result = await coffeeCollection.updateOne(filter, newCoffee);
			res.send(result);
		});

		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
