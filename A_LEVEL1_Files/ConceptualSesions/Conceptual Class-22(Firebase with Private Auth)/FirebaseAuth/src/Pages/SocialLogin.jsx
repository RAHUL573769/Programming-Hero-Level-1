import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
	const { googleLogin, gitHubLogin } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state || "/";
	const handleSocialLogin = (socialProvider) => {
		socialProvider().then((result) => {
			if (result.user) {
				navigate(from);
			}
			// console.log("Result User", result.user);
		});
	};
	return (
		<>
			<div className='divider'>Continue with</div>
			<div className='flex justify-evenly'>
				{" "}
				<button
					className='btn btn-primary btn-circle btn-outline '
					onClick={() => handleSocialLogin(googleLogin)}
				>
					{/* <button
					className='btn btn-primary btn-circle btn-outline '
					onClick={() => googleLogin()}
				> */}
					Google
				</button>
				<button
					className='btn btn-primary btn-circle btn-outline '
					onClick={() => handleSocialLogin(gitHubLogin())}
				>
					Github
				</button>
				{/* <button
					className='btn btn-primary btn-circle btn-outline '
					onClick={() => gitHubLogin()}
				>
					Github
				</button> */}
			</div>
		</>
	);
};

export default SocialLogin;
