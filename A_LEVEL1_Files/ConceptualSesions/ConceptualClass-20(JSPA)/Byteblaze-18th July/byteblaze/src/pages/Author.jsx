import React from "react";
import { useLoaderData } from "react-router-dom";

const Author = () => {
	const data = useLoaderData();
	return (
		<div>
			<h1>Name of Author:{data.user.name}</h1>

			<h1>
				Social Image : <img src={data.social_image}></img>
			</h1>
		</div>
	);
};

export default Author;
