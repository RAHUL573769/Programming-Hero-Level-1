import React from "react";
import { useLoaderData } from "react-router";
import SingleUsers from "../SingleUsers/SingleUsers";

const Users = () => {
	const users = useLoaderData();
	console.log(users);
	return (
		<div>
			<h1>Our Users{users.length}</h1>

			<div className='users'>
				{" "}
				{users.map((user) => (
					<SingleUsers key={user.id} user={user}></SingleUsers>
				))}
			</div>
		</div>
	);
};

export default Users;
