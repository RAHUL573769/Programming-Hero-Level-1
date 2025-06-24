import React from "react";
import { useLoaderData } from "react-router";

const SingleUser = () => {
	const userInfo = useLoaderData();

	const { name } = userInfo;
	console.log("7", userInfo);
	return (
		<div>
			{/* <h1>User Name {userInfo.name}</h1> */}

			<h1>User Name :{name}</h1>
		</div>
	);
};

export default SingleUser;
