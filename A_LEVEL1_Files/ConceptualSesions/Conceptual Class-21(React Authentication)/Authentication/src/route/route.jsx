import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import About from "../About/About";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: (
					<Home>
						<div>Jakariya</div>
					</Home>
				),
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/about",
				element: (
					<ProtectedRoute>
						<About></About>
					</ProtectedRoute>
				),
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
]);

export default router;
