import "./App.css";

function App() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name: name, email: email };
		console.log(user);
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("data after creating user in the db", data);

				if (data.insertedId) {
					alert("User Added Successfully");
				}
				// if (data.insertedId) {
				// 	newUser._id = data.insertedId;
				// 	const newsUsers = [...users, newUser];
				// 	setUsers(newsUsers);
				// 	alert("user added successfully.");
				// 	e.target.reset();
				// }
			});

		// fetch("https://localhost:3000/users", {
		// 	method: "POST",
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// 	body: JSON.stringify(user),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log("data after creating user in the db", data);
		// 	});
	};

	return (
		<>
			<h1>Simple Crud</h1>

			<form onSubmit={handleSubmit}>
				<input type='text' name='name' id=''></input>
				<br></br>
				<input type='email' name='email' id=''></input>
				<br></br>
				<input type='submit' name='Add User'></input>
			</form>
		</>
	);
}

export default App;
