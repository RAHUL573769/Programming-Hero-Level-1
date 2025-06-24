import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home/Home.jsx";
import Header from "./Components/Header/Header.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import Users from "./Components/Users/Users.jsx";
import SingleUsers from "./Components/SingleUsers/SingleUsers.jsx";
import SingleUser from "./Components/SingleUser/SingleUser.jsx";

const router = createBrowserRouter([
	// {
	// 	path: "/",
	// 	element: <Home></Home>,
	// 	children: [
	// 		{
	// 			path: "/about",
	// 			element: <About></About>,
	// 		},
	// 		{
	// 			path: "/contactus",
	// 			element: <Contact></Contact>,
	// 		},
	// 	],
	// },
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/home",
				element: <Home></Home>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/contactus",
				element: <Contact></Contact>,
			},
			{
				path: "/users",
				loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
				element: <Users></Users>,
			},
			{
				path: "/user/:userId",
				loader: ({ params }) =>
					// fetch(`http://localhost:5173/user/${params.userId}`);
					fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
				// console.log(params);

				element: <SingleUser></SingleUser>,
			},
		],
	},
	// {
	// 	path: "/home",
	// 	element: <Home></Home>,
	// },
	{
		path: "/header",
		element: <Header></Header>,
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
		<App />
	</StrictMode>
);
