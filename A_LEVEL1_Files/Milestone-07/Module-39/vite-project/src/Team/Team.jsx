/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Team = () => {
	const [team, setTeam] = useState(11);

	const handleAdd = () => {
		console.log("Clicked");
	};
	const teamStyle = { border: "2px solid yellow", margin: "15px" };
	return (
		<div style={{ teamStyle }}>
			Team {team}
			<br></br>
			<button onClick={handleAdd}>Click to Add</button>
		</div>
	);
};

export default Team;
