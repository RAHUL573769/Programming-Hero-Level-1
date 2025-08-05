import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
	const { handleSignOut1, user } = useContext(AuthContext);

	return (
		<div>
			<div className='navbar bg-base-100 shadow-sm'>
				<div className='flex-1'>
					<a className='btn btn-ghost text-xl'>daisyUI</a>
				</div>
				<div className='flex-none'>
					<ul className='menu menu-horizontal px-1'>
						{user?.email ? (
							<li>
								<button onClick={() => handleSignOut1()}>SignOut</button>{" "}
							</li>
						) : (
							<li>
								<Link to='login'>Login</Link>
							</li>
						)}
						<li>
							<Link to='register'>Register</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
