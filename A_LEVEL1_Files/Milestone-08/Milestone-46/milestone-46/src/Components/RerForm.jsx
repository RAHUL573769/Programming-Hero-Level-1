import React, { useRef } from "react";

const RerForm = () => {
	const name = useRef();
	// const password = useRef();
	const password = useRef();
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(name.current.value);
		console.log(password.current.value);
	};
	return (
		<div>
			{" "}
			<form onSubmit={handleSubmit}>
				<input
					ref={name}
					type='text'
					name='name'
					defaultValue={"Rahul"}
				></input>
				<br></br>
				<input ref={password} type='password' name='password'></input>

				<br></br>
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
};

export default RerForm;
