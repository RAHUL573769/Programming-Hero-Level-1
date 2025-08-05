import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";

const Register = () => {
	const { registerUser, setUser } = useContext(AuthContext);

	const [error, setError] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/;

		const name = e.target.name.value;
		const photo = e.target.photo.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;
		console.log(name, email, password, photo, confirmPassword);
		if (password.length < 6) {
			setError("Password Must be greater than 6 ");
			return;
		}
		if (password !== confirmPassword) {
			setError("Password Donot Match");
			return;
		}
		if (!regex.test(password)) {
			setError("Please Maintain Format");
			return;
		}
		registerUser(email, password)
			.then((result) => {
				console.log(result);
				setUser(result.user);
				setError("");
			})
			.catch((error) => console.log(error));
	};
	return (
		<div className='mx-auto w-[40%] min-w[500px] border-2 border-red-600 rounded-3xl'>
			<form onSubmit={handleSubmit}>
				<div>
					<p>Name</p>
					<input
						type='text'
						placeholder='Type here'
						name='name'
						className='input w-full'
					/>
				</div>
				<div>
					<p>Photo</p>
					<input
						type='url'
						name='photo'
						placeholder='Type here'
						className='input w-full'
					/>
				</div>
				<div>
					<p>Email</p>
					<input
						type='email'
						name='email'
						placeholder='Type here'
						className='input w-full'
					/>
				</div>
				<div>
					<p>Password</p>
					<input
						type='password'
						name='password'
						placeholder='Type here'
						className='input w-full'
					/>
				</div>
				<div>
					<p>Confirm Password</p>
					<input
						type='password'
						name='confirmPassword'
						placeholder='Type here'
						className='input w-full'
					/>
				</div>
				{error && <p>{error}</p>}
				<button type='submit' className='btn btn-primary'>
					Register
				</button>
			</form>
		</div>
	);
};

export default Register;
