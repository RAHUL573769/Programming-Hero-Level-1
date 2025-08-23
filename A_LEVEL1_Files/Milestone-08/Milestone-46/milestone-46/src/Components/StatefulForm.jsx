import React, { useState } from "react";

const StatefulForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();

		// const name = event.target.name.value;

		// const password = event.target.password.value;
		console.log(email, password);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	return (
		<div>
			{" "}
			<form onSubmit={handleSubmit}>
				<input onChange={handleEmailChange} type='text' name='name'></input>
				<br></br>
				<input
					onChange={handlePasswordChange}
					type='password'
					name='password'
				></input>
				<br></br>
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
};

export default StatefulForm;
