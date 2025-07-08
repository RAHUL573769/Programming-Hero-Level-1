import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	const handleDelete = (id) => {
		console.log("User Id Deleted For", id);
		fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	// const users = useLoaderData();
	return (
		<div>
			Users :{users.length}
			{users.map((user) => (
				<div>
					<p key={user._id}>
						Name:{user.name} <p>Email:{user.email}</p>
						<button onClick={() => handleDelete(user._id)}>Cancel</button>
					</p>
				</div>
			))}
		</div>
	);
};

export default Users;
