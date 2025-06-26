import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./Components/Main/Main.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
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
