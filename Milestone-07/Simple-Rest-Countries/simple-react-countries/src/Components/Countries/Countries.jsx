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

	const handleVisitedCountry = () => {};
	return (
		<div className='country-container'>
			{countries.map((country) => (
				<Country key={country.cca} country={country}></Country>
			))}
		</div>
	);
};

export default Countries;
