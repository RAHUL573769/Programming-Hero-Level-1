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
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		//jobs related apis
		const jobsCollection = client.db("jobsCollection").collection("jobs");
		// const jobApplicationCollection = client
		// 	.db("jobPortal")
		// 	.collection("job_applications");

		const jobApplicationCollection = client
			.db("jobPortal")
			.collection("job_applications");
		app.get("/jobs", async (req, res) => {
			const cursor = jobsCollection.find();
			const result = await cursor.toArray();
			res.send(result);
		});

		app.get("/jobsApplicationByEmail", async (req, res) => {
			const jobEmail = req.query.email;

			const query = {
				applicant_email: jobEmail,
			};

			// console.log(jobEmail);

			const result = await jobApplicationCollection.find(query).toArray();

			for (const applications of result) {
				// console.log(applications.job_id);

				const query1 = { _id: new ObjectId(applications.job_id) };
				console.log(query1);
				const job = await jobApplicationCollection.findOne(query1);
				console, log("Job", job);
				if (job) {
					applications.title = job.title;
					applications.company = job.company;
				}
			}
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
			const application = req.body;
			const result = await jobApplicationCollection.insertOne(application);
			res.send(result);
		});
		// app.post("/job-applications", async (req, res) => {
		// 	const reqData = req.body;
		// 	// console.log("Req-body", reqData);
		// 	const data = await jobsApplicationCollection.insertOne(reqData);
		// 	console.log(data);
		// 	res.send(data);
		// });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/", async (req, res) => {
	res.send("Server is Running");
});

app.listen(port, async (req, res) => {
	console.log("Server is Running");
});

// newUser1;
// UHiXTlJNAHHEwdgd
