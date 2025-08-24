import React from "react";
import useInputState from "../hooks/useInputState";
const HookForm = () => {
	const [name, handleNameChange] = useInputState("Rhuk");
	const handleSubmit = (event) => {
		event.preventDefault();

		console.log("Form DATA", name);
	};
	return (
		<div>
			{" "}
			<form onSubmit={handleSubmit}>
				<input
					value={name}
					type='text'
					name='name'
					onChange={handleNameChange}
				></input>
				<br></br>
				<input type='password' name='password'></input>
				<br></br>
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
};

export default HookForm;
