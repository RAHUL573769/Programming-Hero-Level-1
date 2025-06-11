import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BookMarks from "./pages/BookMarks.jsx";
import Blogs from "./pages/Blogs.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{ path: "/", element: <Home></Home> },
			{
				path: "/bookmark",
				element: <BookMarks></BookMarks>,
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
		],
	},
	{ path: "/bookmark", element: <BookMarks></BookMarks> },
	{
		path: "/blogs",
		element: <Blogs></Blogs>,
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</StrictMode>
);
