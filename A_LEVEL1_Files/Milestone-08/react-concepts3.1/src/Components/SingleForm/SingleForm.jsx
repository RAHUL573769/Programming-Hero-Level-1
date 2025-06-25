const SingleForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const phone = e.target.phone.value;
		console.log(name, email, phone);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Single Form</h1>
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

export default SingleForm;
