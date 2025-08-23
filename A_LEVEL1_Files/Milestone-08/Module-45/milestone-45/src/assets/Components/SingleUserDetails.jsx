import React from "react";
import { useLoaderData } from "react-router";

const SingleUserDetails = () => {
	const user = useLoaderData();

	return (
		<div>
			<h1>Details For User:{user?.name}</h1>
		</div>
	);
};

export default SingleUserDetails;
