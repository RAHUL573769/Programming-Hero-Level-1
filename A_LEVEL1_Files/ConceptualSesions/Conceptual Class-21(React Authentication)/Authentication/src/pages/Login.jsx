import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
	const { loginUser, loginUsingGoogle, setUser, user } =
		useContext(AuthContext);

	const location = useLocation();
	const from = location.state || "/";
	const navigate = useNavigate();
	console.log("Location From Login", location);
	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);
		loginUser(email, password)
			.then((data) => {
				navigate(from);
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleGoogleLogin = () => {
		loginUsingGoogle().then((result) => setUser(result.user));
	};

	useEffect(() => {
		if (user) {
			navigate(location.state);
		}
	}, [location.state, navigate, user]);

	return (
		<div>
			<form onSubmit={handleLogin}>
				{" "}
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
				<button type='submit' className='btn btn-primary'>
					Login
				</button>
			</form>
			<button onClick={handleGoogleLogin} className='btn btn-primary'>
				Google Login
			</button>
		</div>
	);
};

export default Login;
