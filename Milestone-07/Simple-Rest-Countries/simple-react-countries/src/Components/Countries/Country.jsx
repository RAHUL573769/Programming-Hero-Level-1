import React, { useState } from "react";

const Country = ({ country }) => {
	const { name, flags, population, area, cca3 } = country;

	const [visited, setVisited] = useState(false);

	const handleVisited = () => {
		setVisited(!visited);
	};
	// console.log(country);
	return (
		<div className={`country ${visited && "visited"}`}>
			<h3 style={{ color: visited ? "Red" : "Blue" }}>Name:{name?.common}</h3>
			<img src={flags.png}></img>
			<h2>Population:{population}</h2>
			<h2>Area:{area}</h2>
			<p>
				<small>Code:{cca3}</small>
			</p>
			<button>Mark Visited</button>
			<br></br>
			<button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
			{visited ? "I have visited" : "I haven't visited"}
		</div>
	);
};

export default Country;
