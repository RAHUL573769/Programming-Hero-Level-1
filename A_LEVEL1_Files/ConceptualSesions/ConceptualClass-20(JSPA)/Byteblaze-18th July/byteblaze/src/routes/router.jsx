import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BookMarks from "../pages/BookMarks";
import MainLayouts from "../layouts/MainLayouts";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayouts></MainLayouts>,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
			{
				path: "/bookmarks",
				element: <BookMarks></BookMarks>,
			},
		],
	},
]);

export default router;
