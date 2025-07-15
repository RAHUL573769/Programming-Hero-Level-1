import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Layout from "./Components/Layout.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import AuthProvider from "./Components/providers/AuthProvider.jsx";
import Users from "./Components/Users.jsx";

const router = createBrowserRouter([
	{
		path: "/",

		element: <Layout></Layout>,
		// loader: () => fetch("http://localhost:5000/getUsers"),

		children: [
			{
				path: "/",
				element: <App></App>,

				loader: () => fetch("http://localhost:5000/getUsers"),
			},
			{
				path: "addCoffee",
				element: <AddCoffee></AddCoffee>,
				loader: () => fetch("http://localhost:5000/getUsers"),
			},
			{
				path: "updateCoffee/:id",
				element: <UpdateCoffee></UpdateCoffee>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/getUsers/${params.id}`),
			},
			{
				path: "signin",
				element: <SignIn></SignIn>,
			},
			{
				path: "signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "users",

				loader: () => fetch("http://localhost:5000/user"),
				element: <Users></Users>,
			},
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			{" "}
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
);
