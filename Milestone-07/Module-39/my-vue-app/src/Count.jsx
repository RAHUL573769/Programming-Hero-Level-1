import React, { useState } from "react";

const Count = () => {
	const [count, setCount] = useState(0);

	const handleIncreaseCounter = () => {
		const newCount = count + 1;
		setCount(newCount);
	};

	const handleDecreaseCounter = () => {
		const newCount = count - 1;
		setCount(newCount);
	};
	return (
		<div>
			<h1>Counter:{count}</h1>

			<button onClick={handleIncreaseCounter}>Click to Count</button>
			<button onClick={() => handleDecreaseCounter()}>Click to Count</button>
		</div>
	);
};

export default Count;
