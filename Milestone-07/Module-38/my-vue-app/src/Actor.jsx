import React from "react";

const Actor = (props) => {
	console.log(props.name);
	return <div> Actors:{props.name}</div>;
};

export default Actor;
