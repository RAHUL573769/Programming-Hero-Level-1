import React from "react";
import { useLoaderData } from "react-router";
import SingleUser from "./SingleUser";

const User = () => {
	const userData = useLoaderData();
	// const userStyle = {
	// 	display: "grid",

	// };

	console.log(userData);
	return (
		<div className='userStyle'>
			<h1>This is User Page :{userData?.length}</h1>

			{userData?.map((user) => (
				<SingleUser user={user}></SingleUser>
			))}
		</div>
	);
};

export default User;
