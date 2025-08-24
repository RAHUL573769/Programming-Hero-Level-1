import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import Dashboard from "./Components/Dashboard.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{ path: "/", element: <HomePage></HomePage> },
			{ path: "/dashboard", element: <Dashboard></Dashboard> },
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
