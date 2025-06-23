import React, { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const routes = [
		{ id: 1, path: "/", name: "Home" },
		{ id: 2, path: "/", name: "Home" },
		{ id: 3, path: "/about", name: "About" },
		{ id: 4, path: "/services", name: "Services" },
		{ id: 5, path: "/contact", name: "Contact" },
	];
	return (
		<div>
			<nav>
				<div onClick={() => setOpen(!open)}>
					{" "}
					{open === true ? (
						<AiOutlineClose></AiOutlineClose>
					) : (
						<IoMdMenu className='text-3xl md:hidden'></IoMdMenu>
					)}
				</div>
				<ul className='md:flex mr-4'>
					{routes.map((route) => (
						<Link route={route}></Link>
						// <li className='mr-4' key={route.id}>
						// 	<a href={`route.path`}>{route.name}</a>
						// </li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
