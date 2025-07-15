import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Register from "../../Components/Register";
import Login from "../../Components/Login";
import Home from "../../Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <h1>Page Not Found</h1>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{ path: "/login", element: <Login></Login> },
		],
	},
]);

export default router;
