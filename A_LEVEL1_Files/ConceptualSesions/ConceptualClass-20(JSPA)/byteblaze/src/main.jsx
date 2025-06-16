import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import MainLayouts from "./Layouts/MainLayouts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts></MainLayouts>,

		children: [
			{
				index: true,
				element: <Home></Home>,
			},

			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
			{
				path: "/bookmarks",
				element: <Bookmarks></Bookmarks>,
			},
		],
	},
	// {
	// 	path: "/blogs",
	// 	element: <Blogs></Blogs>,
	// },
	// {
	// 	path: "/bookmarks",
	// 	element: <Bookmarks></Bookmarks>,
	// },
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}>
			{" "}
			<App />
		</RouterProvider>
	</StrictMode>
);
