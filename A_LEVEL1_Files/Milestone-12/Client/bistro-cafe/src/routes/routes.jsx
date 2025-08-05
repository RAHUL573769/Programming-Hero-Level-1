import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/A_MainMenuLayout/Menu";
import OrderMainLayout from "../Pages/Order/OrderMainLayout/OrderMainLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/menu",
				element: <Menu></Menu>,
			},
			{
				path: "/orders/:category",
				element: <OrderMainLayout></OrderMainLayout>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
		],
	},
]);
