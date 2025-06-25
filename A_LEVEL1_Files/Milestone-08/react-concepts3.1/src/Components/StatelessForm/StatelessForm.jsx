/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import useInputState from "../../hooks/useInputState";

const StatelessForm = () => {
	const [email, setEmail] = useState(null);
	const value = useInputState("Rojoni");
	const [name, setName] = useState(null);
	const [error, setError] = useState(null);
	console.log(value);
	const handleSubmit = (e) => {
		e.preventDefault();

		if (name.length < 5) {
			setError("Name must be at least 5 characters long");
		} else {
			setError("");
		}
		console.log(email);
	};

	// const handleError = (e) => {
	// 	e.preventDefault();
	// };

	const handleEmailChange = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const handleNameChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
		// console.log(name);
	};
	return (
		<div>
			{" "}
			<form onSubmit={handleSubmit}>
				<h1>Single Form</h1>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						onChange={handleNameChange}
						type='text'
						id='name'
						name='name'
					></input>
					<label htmlFor='email'>Email:</label>
					<input
						onChange={handleEmailChange}
						type='email'
						id='emal'
						name='email'
					></input>
					<label htmlFor='phone'>Phone:</label>
					<input type='phone' id='phone' name='phone'></input>

					<button type='submit'>Submit</button>
					{error && <p>Name Error Found</p>}
				</div>
			</form>
		</div>
	);
};

export default StatelessForm;
