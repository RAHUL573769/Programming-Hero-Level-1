import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Components/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		// element: "Home",
	},
	{
		path: "/about",
		element: "I am about ",
	},
	{
		path: "/contact",
		element: "Contact Me ",
	},
]);
export default router;
