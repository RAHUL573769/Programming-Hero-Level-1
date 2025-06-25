import React, { useRef } from "react";

const RefForm = () => {
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		console.log(name, email);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Single Form</h1>
				<div>
					<label htmlFor='name'>Name:</label>
					<input ref={nameRef} type='text' id='name' name='name'></input>
					<label htmlFor='email'>Email:</label>
					<input ref={emailRef} type='email' id='emal' name='email'></input>
					<label htmlFor='phone'>Phone:</label>
					<input type='phone' id='phone' name='phone'></input>

					<button type='submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default RefForm;
