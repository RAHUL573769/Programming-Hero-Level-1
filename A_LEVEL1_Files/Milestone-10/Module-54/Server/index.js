const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
	res.send("User Management is Running");
});

const users = [
	{ id: 1, name: "Sabina", email: "sabina@gmail.com" },
	{ id: 2, name: "Sabina", email: "sabina@gmail.com" },
	{ id: 3, name: "Sabina", email: "sabina@gmail.com" },
	{ id: 4, name: "Sabina", email: "sabina@gmail.com" },
];

app.get("/user", (req, res) => {
	res.send(users);
});
app.post("/user", (req, res) => {
	console.log("Post Route Hitting");

	const newUser = req.body;
	newUser.id = users.length + 1;
	users.push(newUser);
	res.send(newUser);
});
app.listen(port, () => {
	console.log("Server is Running");
});
