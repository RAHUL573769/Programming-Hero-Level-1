import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import SocialLogin from "./SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
	const { signInWithEmailPassword1 } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state || "/";
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// const onSubmit = (data) => {
	// 	signInWithEmailAndPassword(data.mail, data.password).then((result) =>
	// 		console.log(result)
	// 	);
	// };
	const onSubmit = (data) => {
		console.log(data);

		const { mail, password } = data;
		signInWithEmailPassword1(mail, password).then((result) => {
			console.log(result);
			navigate(from);
		});
	};

	return (
		<div>
			<h1>This is Login</h1>

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

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'
					>
						<div className='card-body'>
							<fieldset className='fieldset'>
								<label className='label'>Email</label>
								<input
									{...register("mail", {
										required: "Email Address is required",
									})}
									type='email'
									className='input'
									placeholder='Email'
								/>

								{errors.mail && <span>This field is required</span>}
								<label className='label'>Password</label>
								<input
									type='password'
									{...register("password", {
										required: "Password is required",
									})}
									className='input'
									placeholder='Password'
								/>
								{errors.password && <span>Password field is required</span>}
								<div>
									<a className='link link-hover'>Forgot password?</a>
								</div>
								<button type='submit' className='btn btn-neutral mt-4'>
									Login
								</button>

								<SocialLogin></SocialLogin>
							</fieldset>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
