import React, { useEffect, useState } from "react";

const Users = () => {
	const [user, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);

	return (
		<div>
			<h3>Users:{user.length}</h3>
		</div>
	);
};

export default Users;
