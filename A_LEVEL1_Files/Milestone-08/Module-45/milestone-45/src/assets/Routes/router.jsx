import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Components/Home";
import About from "../Components/About";
import User from "../Components/User";
import SingleUserDetails from "../Components/SingleUserDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		errorElement: "No page Available",

		children: [
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/contact",
				element: "Contact Me ",
			},
			{
				path: "/user",
				loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
				element: <User></User>,
			},
			{
				path: "/user/:id",
				loader: ({ params }) =>
					fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
				element: <SingleUserDetails></SingleUserDetails>,
			},
		],
		// element: "Home",
	},
]);
export default router;
