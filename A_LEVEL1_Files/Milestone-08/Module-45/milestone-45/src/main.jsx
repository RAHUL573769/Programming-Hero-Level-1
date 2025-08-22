import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./assets/Components/Home.jsx";
// import router from "./assets/Router/router.js";
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
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}>
			{" "}
			<App />
		</RouterProvider>
	</StrictMode>
);
