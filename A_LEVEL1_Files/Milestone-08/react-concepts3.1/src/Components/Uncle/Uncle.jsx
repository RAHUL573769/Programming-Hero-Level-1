import React from "react";
import { useContext } from "react";
import { AssetContext } from "../createContextApi";

const Uncle = () => {
	const value = useContext(AssetContext);
	console.log(value);
	return (
		<div>
			<h1>This is Uncle and has {value.gold}</h1>
		</div>
	);
};

export default Uncle;
