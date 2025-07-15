import React from "react";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

const SignUp = () => {
	const { createUser } = useContext(AuthContext);
	const handleSignUp = (e) => {
		e.preventDefault();

		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		createUser(email, password)
			.then((res) => {
				console.log(res);
				//save user info
				const userData = { name, email };
				fetch("http://localhost:5000/users", {
					method: "POST",
					headers: { "content-type": "application/json" },
					body: JSON.stringify(userData),
				})
					.then((res) => res.json())
					.then((data) => console.log(data));
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<h1>Sign Up</h1>
			<div className='hero bg-base-200 min-h-screen'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl font-bold'>Login now!</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
					</div>
					<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
						<form onSubmit={handleSignUp} className='card-body'>
							<fieldset className='fieldset'>
								<label className='label'>Name</label>
								<input
									type='text'
									className='input'
									name='name'
									placeholder='Email'
								/>
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
								<button className='btn btn-neutral mt-4'>Login</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
