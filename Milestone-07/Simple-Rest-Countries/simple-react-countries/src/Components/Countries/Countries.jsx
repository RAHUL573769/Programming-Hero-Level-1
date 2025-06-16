import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [visited, setVisited] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/independent?status=true")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);

	const handleVisitedCountry = (country) => {
		// console.log("Add to visited Country");
		const newVisitedCountries = [...visited, country];
		setVisited(newVisitedCountries);
	};
	return (
		<div>
			<h5 className='text-white'>Visited Countries{visited.length}</h5>

			<ul></ul>

			<div className='country-container'>
				{countries.map((country) => (
					<Country
						key={country.cca}
						country={country}
						handleVisitedCountry={handleVisitedCountry}
					></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;
