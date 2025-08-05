import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
	const { createUser, setUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state || "/";
	const handleSubmit = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const password = e.target.password.value;
		const email = e.target.email.value;
		const confirmPassword = e.target.confirmPassword.value;
		console.log(name, password, email, confirmPassword);
		// verifyEmail();
		createUser(email, password)
			.then((user) => {
				console.log(user.user);
				setUser(user.user);
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<h1>This is Register</h1>

			<div className='mx-auto w-[50%] min-w[500px] border-2 border-red-600 rounded-3xl px-7'>
				{" "}
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<h1>Name</h1>
						<input
							type='text'
							name='name'
							className='input'
							placeholder='Type here'
						/>
					</div>
					<div className='form-control'>
						<h1>Email</h1>
						<input
							type='text'
							name='email'
							className='input'
							placeholder='Type here'
						/>
					</div>
					<div className='form-control'>
						<h1>Password</h1>
						<input
							type='password'
							name='password'
							className='input'
							placeholder='Type Password here'
						/>
					</div>
					<div className='form-control'>
						<h1>Confirm Password</h1>
						<input
							type='password'
							name='confirmPassword'
							className='input'
							placeholder='Type Confirm Password here'
						/>
					</div>
					<button type='submit' className=' my-6 py-6 btn btn-primary'>
						Register Here
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
