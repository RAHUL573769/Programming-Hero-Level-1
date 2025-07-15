import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import AddCoffee from "./Components/AddCoffee/AddCoffee.jsx";
import Home from "./Components/HomePage/Home.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{ path: "/", element: <Home></Home> },
			{
				path: "addCoffee",
				element: <AddCoffee></AddCoffee>,
			},
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}>
			{" "}
			<App />
		</RouterProvider>
	</StrictMode>
);
