import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const MainLayout = () => {
	return (
		<div>
			{" "}
			<div>
				<Header></Header>

				<Outlet></Outlet>

				<Footer></Footer>
			</div>
		</div>
	);
};

export default MainLayout;
