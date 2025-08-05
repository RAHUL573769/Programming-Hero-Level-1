import React from "react";

const Home = (props) => {
	console.log(props.children);
	return (
		<div>
			<h1>{props.children}</h1>
		</div>
	);
};

export default Home;
