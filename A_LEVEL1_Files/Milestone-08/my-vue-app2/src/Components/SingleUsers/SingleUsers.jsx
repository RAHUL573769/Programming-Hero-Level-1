import React from "react";
import { Link, useNavigate } from "react-router";

const SingleUsers = ({ user }) => {
	const { id, name, phone, username } = user;

	const { name: companyName } = user.company;

	const userStyle = {
		border: "2px solid yellow",
		padding: "10px",
		borderRadius: "10px",
	};
	const navigate = useNavigate();

	const handleLoadUsers = () => {
		navigate(`/user/${id}`);
	};
	console.log(user);
	return (
		<div style={userStyle}>
			<h1>Hi</h1>
			<div>
				<p>ID:{id}</p>
				<p>Name:{name}</p>
				<p>Phone:{phone}</p>
				<p>User Name :{username}</p>
				<p>Company Name:{companyName}</p>
				<Link to={`/user/${id}`}>User Details</Link>
				<button onClick={handleLoadUsers}>User Details On Navigate</button>
			</div>
		</div>
	);
};

export default SingleUsers;
