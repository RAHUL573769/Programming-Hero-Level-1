import React from "react";

const SimpleForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const phone = event.target.phone.value;

		console.log(name, email, phone);
		console.log("Form Submitted");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Name</h2>
				<input type='text' name='name' id=''></input>
				<h2>Email</h2>
				<input type='email' name='email' id=''></input>
				<h3>Phone</h3>
				<input type='tel' name='phone' id=''></input>
				<br></br>

				<button>Submit</button>
			</form>
		</div>
	);
};

export default SimpleForm;
