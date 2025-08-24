import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthContext";

const StatefulForm = () => {
	const { name } = useContext(AuthContext);

	console.log(name);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();

		// const name = event.target.name.value;

		// const password = event.target.password.value;
		console.log(email, password);
		if (password.length < 5) {
			setError("Password must be greater than 6 Letters");
		}
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
				{error && <p>Password Error</p>}
				<br></br>
				<input type='submit' value='Submit'></input>
			</form>
		</div>
	);
};

export default StatefulForm;
