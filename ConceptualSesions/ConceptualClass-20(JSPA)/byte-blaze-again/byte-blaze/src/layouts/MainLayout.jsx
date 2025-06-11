import React from "react";
import Nav from "../Components/Nav";
import Home from "../pages/Home";
import BookMarks from "../pages/BookMarks";
import Blogs from "../pages/Blogs";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div>
			<div className='h-16'>
				<Nav></Nav>
			</div>

			<Outlet></Outlet>
			{/* <Home></Home>

			<BookMarks></BookMarks>
			<Blogs></Blogs> */}
		</div>
	);
};

export default MainLayout;
