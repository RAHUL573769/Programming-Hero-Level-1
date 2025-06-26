import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Bookmarks from "./Components/BookMarks/Bookmarks.jsx";
import Login from "./Login/Login.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <div>Page Not Found</div>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/bookmark",
				element: <Bookmarks></Bookmarks>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
		<App />
	</StrictMode>
);
