/* eslint-disable no-unused-vars */
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase.init";

const Login = () => {
	// const [user1, setUser1] = useState(null);
	const provider = new GoogleAuthProvider();
	const handleGoogleLogin = () => {
		console.log("Google login initiated");

		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				// ...
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<h1>This is Login for </h1>

			<button onClick={handleGoogleLogin}>Login With Google</button>
		</div>
	);
};

export default Login;
