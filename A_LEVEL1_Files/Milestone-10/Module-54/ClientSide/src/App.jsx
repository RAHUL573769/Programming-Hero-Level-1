import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/user")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	const handleUser = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		console.log(name, email);

		const users = { name, email };

		fetch("http://localhost:5000/user", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(users),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				const newUsers = [...users, data];

				setUsers(newUsers);
			});
	};
	return (
		<>
			Users Management System:{users.length}
			<div>
				{users.map((user) => (
					<p>
						{user.name} <b></b>:Email{user.email}
					</p>
				))}

				<h1>Add Users</h1>

				<form onSubmit={handleUser}>
					<input type='text' name='name' id=''></input>
					<br></br>

					<input type='email' name='email'></input>

					<br></br>
					<input type='submit' name='AddUser'></input>
				</form>
			</div>
		</>
	);
}

export default App;
