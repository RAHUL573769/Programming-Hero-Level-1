import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	// eslint-disable-next-line no-unused-vars
	const handleRegister = (event) => {
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		// console.log(email, password);
		createUser(email, password)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<h1>Hi From Register</h1>

			<div className='hero bg-base-200 min-h-screen'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center lg:text-left'>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
					<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
						<h1 className='text-5xl font-bold'>Register now!</h1>
						<form onSubmit={handleRegister} className='card-body'>
							<div className='form-control'>
								<label className='label'>Email</label>
								<input
									type='email'
									className='input'
									name='email'
									placeholder='Email'
								/>
								<label className='label'>Password</label>
								<input
									type='password'
									className='input'
									name='password'
									placeholder='Password'
								/>
								<div>
									<a className='link link-hover'>Forgot password?</a>
								</div>
								<button className='btn btn-neutral mt-4'>Register</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
