import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";

const Navbar = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<div>
			<div className='navbar bg-base-100 shadow-sm'>
				<div className='flex-1'>
					<a className='btn btn-ghost text-xl'>daisyUI</a>
				</div>
				<div className='flex-none'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
						<li>{user && user?.email}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
