import React from "react";

const SimpleForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();

		const name = event.target.name.value;

		const password = event.target.password.value;
		console.log(name, password);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name'></input>
				<br></br>
				<input type='password' name='password'></input>
				<br></br>
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
};

export default SimpleForm;
