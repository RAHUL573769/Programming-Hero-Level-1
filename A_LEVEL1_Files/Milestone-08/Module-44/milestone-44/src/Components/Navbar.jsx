import React, { useState } from "react";
import Link from "./Link";
import routes from "./routes";
import { RxDropdownMenu } from "react-icons/rx";

import { IoMdClose } from "react-icons/io";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<div onClick={() => setOpen(!open)}>
				{" "}
				{open === true ? <IoMdClose /> : <RxDropdownMenu></RxDropdownMenu>}
				{/* <RxDropdownMenu className='text-3xl md:hidden' /> */}
			</div>
			<nav className='md:flex '>
				{routes.map((route) => (
					<ul className='absolute'>
						{" "}
						<Link key={route.id} route={route}></Link>
					</ul>
					// <li className='mr-3' key={routes.id}>
					// 	<a href={route.path}>{route.name}</a>
					// </li>
				))}
			</nav>
		</div>
	);
};

export default Navbar;
