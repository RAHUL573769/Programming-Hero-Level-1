import React, { useEffect, useState } from "react";
import calculate from "../Calculate/Calculate";
import SingleWatch from "./SingleWatch";

const Watch = () => {
	const { addThreeNumbers, multiplyThreeNumbers } = calculate;

	const num1 = 123;
	const num2 = 12;
	const num3 = 13;

	const sum = addThreeNumbers(num1, num2, num3);

	const multiply = multiplyThreeNumbers(num1, num2, num3);

	const [watches, setWatches] = useState([]);
	useEffect(() => {
		fetch("watches.json")
			.then((res) => res.json())
			.then((data) => setWatches(data));
	}, []);

	return (
		<div>
			Sum :{sum}
			<br></br>
			Multiply:{multiply}
			{watches.map((watch) => (
				<SingleWatch watch={watch}></SingleWatch>
			))}
		</div>
	);
};

export default Watch;
