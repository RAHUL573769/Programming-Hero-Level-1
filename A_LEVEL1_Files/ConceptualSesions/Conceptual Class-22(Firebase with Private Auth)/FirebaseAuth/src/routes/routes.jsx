import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: "Route Not Found",

		children: [
			{
				path: "/",
				element: (
					<PrivateRoute>
						<HomePage></HomePage>
					</PrivateRoute>
				),
			},
			{ path: "/login", element: <Login></Login> },
			{ path: "/register", element: <Register></Register> },
		],
	},
]);
