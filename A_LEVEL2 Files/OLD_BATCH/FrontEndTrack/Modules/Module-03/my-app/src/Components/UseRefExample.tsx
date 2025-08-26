import React, { useRef, useState } from "react";

const UseRefExample = () => {
	const [count, setCount] = useState(0);
	const mrRef = useRef(0);
	console.log(mrRef);

	const increment = () => {
		mrRef.current = mrRef.current + 1;

		setCount(count + 1);
	};
	return (
		<div>
			<h1>UseRe f'{mrRef.current}</h1>

			<button onClick={() => increment()}>Increment</button>
		</div>
	);
};

export default UseRefExample;
