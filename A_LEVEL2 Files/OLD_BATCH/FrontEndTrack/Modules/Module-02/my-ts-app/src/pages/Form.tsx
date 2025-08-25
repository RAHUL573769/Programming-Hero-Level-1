import React, { useState } from "react";

const Form = () => {
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	const [user, setUser] = useState({ name: "", email: "" });
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log(user);
	};

	const handleChange = (e: any) => {
		e.preventDefault();

		const inputName = e.target.name;
		const value = e.target.value;
		console.log(inputName, value);
		// setUser({ ...user, name: e.target.value });

		setUser({ ...user, [inputName]: value });
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				// onChange={(e) => setUser({ ...user, name: e.target.value })}
				// onChange={(e) => setName(e.target.value)}
				type='text'
				name='name'
				id='name'
			></input>
			<input
				type='email'
				onChange={handleChange}
				// onChange={(e) => setUser({ ...user, email: e.target.value })}
				name='email'
				id='email'
			></input>

			<button>Click</button>
		</form>
	);
};

export default Form;
