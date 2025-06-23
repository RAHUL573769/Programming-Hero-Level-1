import React, { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { FaRegWindowClose } from "react-icons/fa";

const Navar = () => {
	const [open, setOpen] = useState(false);
	// console.log(open);
	const routes = [
		{
			id: 1,
			path: "/",
			name: "Home",
		},
		{
			id: 2,
			path: "/about",
			name: "About",
		},
		{
			id: 3,
			path: "/services",
			name: "Services",
		},
		{
			id: 4,
			path: "/contact",
			name: "Contact",
		},
		{
			id: 5,
			path: "*",
			name: "NotFound",
		},
	];
	return (
		<nav className='bg-yellow-200 text-black-200 px-8  '>
			<div onClick={() => setOpen(!open)}>
				{open === true ? (
					<FaRegWindowClose className='text-2xl md:hidden'></FaRegWindowClose>
				) : (
					<IoIosMenu className='text-2xl md:hidden' />
				)}
			</div>

			<ul
				className={`md:flex  absolute duration-1000"   ${
					open ? "top-16" : "-top-60"
				} bg-yellow-400 px-6 shadow-lg `}
			>
				{" "}
				{routes.map((route) => (
					<Link route={route}></Link>
				))}
			</ul>
		</nav>
	);
};

export default Navar;
