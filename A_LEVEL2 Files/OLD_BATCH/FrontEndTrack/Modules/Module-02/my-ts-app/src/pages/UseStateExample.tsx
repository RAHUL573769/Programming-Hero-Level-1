import React, { useState } from "react";

type TCounter = {
	counter: number;
	setCounter: React.Dispatch<React.SetStateAction<number>>;
	handleIncrement: any;
};

const UseStateExample = ({
	counter,
	setCounter,
	handleIncrement,
}: TCounter) => {
	console.log("Render");
	return (
		<div>
			<h1>Counter :{counter}</h1>{" "}
			{/* <button onClick={() => setCounter(counter + 1)}>Increment</button> */}
			<button
				// onClick={() => setCounter((prevState) => prevState + 1)}
				onClick={handleIncrement}
			>
				Increment
			</button>
			<button
				onClick={() => setCounter(counter - 1)}
				className='btn btn-primary'
			>
				Decrement
			</button>
			<button onClick={() => setCounter(0)} className='btn btn-primary'>
				Reset
			</button>
		</div>
	);
};

export default UseStateExample;
