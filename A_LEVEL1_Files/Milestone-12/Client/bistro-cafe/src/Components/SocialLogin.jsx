import React from "react";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = ({ handleGoogleLogin }) => {
	return (
		<div className='p-8'>
			<button onClick={handleGoogleLogin} className='btn '>
				<FaGoogle className='mr-4'></FaGoogle>
				Google
			</button>
		</div>
	);
};

export default SocialLogin;
