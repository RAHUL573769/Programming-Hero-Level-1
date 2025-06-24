import React from "react";
import { Link } from "react-router";

const Header = () => {
	return (
		<div>
			<h2>Navbar</h2>
			<nav>
				<Link to='/home'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/contactus'>Contact Us</Link>
				<Link to='/users'>My Users</Link>
			</nav>
		</div>
	);
};

export default Header;
