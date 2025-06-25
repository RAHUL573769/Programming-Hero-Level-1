/* eslint-disable no-unused-vars */
import React from "react";

const Reusuable = ({ formTitle, handleSignUpSubmit, children }) => {
	const handleLocalSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const data = { name, email };
		handleSignUpSubmit(data);
	};
	return (
		<div>
			{" "}
			<form onSubmit={handleLocalSubmit}>
				{/* <h1>{formTitle} Single Form</h1> */}

				{children}
				<div>
					<label htmlFor='name'>Name:</label>
					<input type='text' id='name' name='name'></input>
					<label htmlFor='email'>Email:</label>
					<input type='email' id='emal' name='email'></input>
					<label htmlFor='phone'>Phone:</label>
					<input type='phone' id='phone' name='phone'></input>

					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Reusuable;
