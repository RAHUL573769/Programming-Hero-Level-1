import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		localStorage.setItem("theme", theme);
		const localTheme = localStorage.getItem("theme");
		document.querySelector("html").setAttribute("data-theme", localTheme);
	}, [theme]);
	const handleToggle = (e) => {
		if (e.target.checked) {
			setTheme("synthwave");
		} else {
			setTheme("light");
		}
	};

	console.log(theme);
	return (
		<div>
			<div className='navbar bg-base-100 shadow-2xl px-5 fixed'>
				<div className='flex-1'>
					<a className='btn btn-ghost text-secondary text-2xl'>
						Byte <span className='text-primary'>Blaze</span>
					</a>
				</div>
				<div className='flex-none'>
					<ul className='menu menu-horizontal px-1'>
						<li className='font-bold'>
							<NavLink
								className={(isActive) => {
									isActive ? "text-primary font-bold" : "font-bold";
								}}
								to='/'
							>
								Home
							</NavLink>
						</li>
						<li className='font-bold'>
							<NavLink
								className={({ isActive }) => {
									isActive ? "text-primary font-bold" : "font-bold";
								}}
								to='/blogs'
							>
								Blogs
							</NavLink>
						</li>
						<li className='font-bold'>
							<NavLink to='/bookmark'>Bookmarks</NavLink>
						</li>

						<label className='flex cursor-pointer gap-2'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<circle cx='12' cy='12' r='5' />
								<path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
							</svg>
							<input
								onChange={handleToggle}
								type='checkbox'
								value='synthwave'
								className='toggle theme-controller'
							/>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
							</svg>
						</label>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
