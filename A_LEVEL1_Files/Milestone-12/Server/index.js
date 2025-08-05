const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 5000;

const uri = "mongodb://localhost:27017/";
// const uri =
// 	"mongodb+srv://newUser1:UHiXTlJNAHHEwdgd@cluster0.xfoemxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// newUser1;
// UHiXTlJNAHHEwdgd
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
		const menuCollection = client.db("bistroDb").collection("menu");
		// Send a ping to confirm a successful connection

		await client.db("admin").command({ ping: 1 });
		app.get("/menu", async (req, res) => {
			const result = await menuCollection.find().toArray();

			res.send(result);
		});
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
	}
}
run().catch(console.dir);

app.get("/", async (req, res) => {
	res.send("Server is Running");
});

app.listen(port, async (req, res) => {
	console.log("Server is Running");
});
