const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();
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
		const userCollection = client.db("bistroDb").collection("users");
		const menuCollection = client.db("bistroDb").collection("menu");
		const cartCollection = client.db("bistroDb").collection("carts");
		// Send a ping to confirm a successful connection
		const verifyToken = (req, res, next) => {
			console.log("Inside Verify Token", req.headers);
			if (!req.headers.Authorization) {
				return res.status(401).send({ message: "forbidden-access" });
			}

			const token = req.headers.Authorization.split(" ")[1];
			console.log("Token Inside verify token", token);
			jwt.verify(
				token,
				"U)F/|0Ki/3@+R[I)U*a#@woEdAO+Hve-z]3]ZZg9QhSg:C@qa4H",
				(err, decoded) => {
					if (err) {
						return res.status(401).send({ message: "forbidden-access1" });
					}

					req.decoded = decoded;
					next();
				}
			);
		};
		await client.db("admin").command({ ping: 1 });
		app.get("/menu", async (req, res) => {
			const result = await menuCollection.find().toArray();

			res.send(result);
		});

		app.get("/carts", async (req, res) => {
			const email = req.query.email;
			const query = { email: email };
			const result = await cartCollection.find(query).toArray();
			res.send(result);
		});
		app.post("/jwt", async (req, res) => {
			const user = req.body;
			const token = jwt.sign(
				user,
				"U)F/|0Ki/3@+R[I)U*a#@woEdAO+Hve-z]3]ZZg9QhSg:C@qa4H",
				{
					expiresIn: "1h",
				}
			);
			console.log("Token", token);

			res.send({ token });
		});

		app.delete("/carts/:id", async (req, res) => {
			const id = req.params.id;

			const query = { _id: new ObjectId(id) };

			const result = await cartCollection.deleteOne(query);
			res.send(result);
		});
		// app.get("/carts", async (req, res) => {

		// 	const result = await cartCollection.find().toArray();
		// 	res.send(result);
		// });

		app.post("/carts", async (req, res) => {
			const cartItem = req.body;
			const result = await cartCollection.insertOne(cartItem);
			res.send(result);
		});

		// user related api
		app.get("/users", verifyToken, async (req, res) => {
			const users = await userCollection.find().toArray();
			console.log(req.headers);
			console.log(users);
			res.send(users);
		});
		app.post("/users", async (req, res) => {
			const user = req.body;
			const query = { email: user.email };

			const existingUser = await userCollection.findOne(query);
			console.log("Existing User", existingUser);
			if (existingUser) {
				return res.send({ message: "User already exists", insertedId: null });
			}
			const result = await userCollection.insertOne(user);

			res.send(result);
		});
		app.patch("/users/admin/:id", async (req, res) => {
			const id = req.params.id;
			const filter = { _id: new ObjectId(id) };
			const updatedDoc = { $set: { role: "admin" } };
			const result = await userCollection.updateOne(filter, updatedDoc);
			res.send(result);
		});
		app.delete("/users/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await userCollection.deleteOne(query);
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
//

// Naming Convention

//
