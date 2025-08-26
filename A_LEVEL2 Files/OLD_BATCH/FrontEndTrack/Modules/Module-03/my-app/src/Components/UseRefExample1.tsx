import React, { useEffect, useRef } from "react";
import CustomInput from "./CustomInput";

const UseRefExample1 = () => {
	const myRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const name = myRef.current?.value;
		console.log("Nmae", name);
	};
	useEffect(() => {
		myRef.current?.focus();
	}, []);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CustomInput ref={myRef} className={""}></CustomInput>
				{/* <input
					ref={myRef}
					className=''
					name='name'
					type='text'
					id='name'
				></input> */}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default UseRefExample1;
