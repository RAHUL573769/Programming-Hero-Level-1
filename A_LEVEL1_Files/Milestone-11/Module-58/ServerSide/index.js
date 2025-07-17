const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();

const port = 5000;

const uri = "mongodb://localhost:27017/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
		//jobs related apis
		const jobsCollection = client.db("jobsCollection").collection("jobs");
		const jobsApplicationCollection = client
			.db("jobsApplicationCollection ")
			.collection("collections");
		app.get("/jobs", async (req, res) => {
			const cursor = jobsCollection.find();
			const result = await cursor.toArray();
			res.send(result);
		});
		app.get("/jobs/:id", async (req, res) => {
			const jobId = req.params.id;

			const query = { _id: new ObjectId(jobId) };
			const result = await jobsCollection.findOne(query);
			// console.log(result);
			res.send(result);
		});
		app.post("/jobApplicationCollection", async (req, res) => {
			const reqData = req.body;
			const data = await jobsApplicationCollection.insertOne(reqData);

			res.send(data);
			console.log(data);
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

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
	res.send("Server is Running");
});

app.listen(port, async (req, res) => {
	console.log("Server is Running");
});
