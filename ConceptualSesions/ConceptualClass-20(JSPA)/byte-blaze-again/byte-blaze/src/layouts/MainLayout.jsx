import React from "react";
import Nav from "../Components/Nav";
import Home from "../pages/Home";
import BookMarks from "../pages/BookMarks";
import Blogs from "../pages/Blogs";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const MainLayout = () => {
	return (
		<div>
			<div className='h-16'>
				<Nav></Nav>
			</div>

			<div className='min-h-[calc(100vh-120px)]'>
				<Outlet></Outlet>
			</div>
			{/* <Home></Home>

			<BookMarks></BookMarks>
			<Blogs></Blogs> */}

			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
