import React from "react";
import { Link } from "react-router";

const SingleUser = ({ user }) => {
	// console.log(user);
	return (
		<div className='singleUserStyle'>
			<h1>Use Name:{user?.name}</h1>

			<Link to={`/user/${user?.id}`}>Show Details</Link>
		</div>
	);
};

export default SingleUser;
