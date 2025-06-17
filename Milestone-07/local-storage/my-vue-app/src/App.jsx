/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function App() {
	const watchesData = [
		{
			id: 1,
			name: "Rolex Submariner",
			price: 8500,
		},
		{
			id: 2,
			name: "Omega Seamaster",
			price: 5000,
		},
		{
			id: 3,
			name: "Tag Heuer Carrera",
			price: 3200,
		},
		{
			id: 4,
			name: "Casio G-Shock",
			price: 150,
		},
		{
			id: 5,
			name: "Tissot PRX",
			price: 700,
		},
		{
			id: 6,
			name: "Seiko Prospex",
			price: 1200,
		},
		{
			id: 7,
			name: "Fossil Gen 6 Smartwatch",
			price: 300,
		},
		{
			id: 8,
			name: "Citizen Eco-Drive",
			price: 400,
		},
		{
			id: 9,
			name: "Apple Watch Series 9",
			price: 450,
		},
		{
			id: 10,
			name: "Garmin Fenix 7",
			price: 650,
		},
	];

	const [watches, setWatches] = useState([]);
	fetch("watches.json")
		.then((res) => res.json())
		.then((data) => console.log(data));
	return (
		<>
			<div></div>
		</>
	);
}

export default App;
