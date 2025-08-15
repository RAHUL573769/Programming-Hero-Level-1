import React from "react";

const Actor = (props) => {
	console.log(props);

	const { name, age } = props.singer;

	return (
		<div>
			{/* {props.name} */}
			<h1>Name :{name}</h1>
		</div>
	);
};

export default Actor;
