import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BookMarks from "../pages/BookMarks";
import MainLayouts from "../layouts/MainLayouts";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";

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
				loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
			},

			{
				path: "/blog/:id",
				loader: ({ params }) =>
					fetch(`https://dev.to/api/articles/${params.id}`),
				element: <Blog></Blog>,
			},
			{
				path: "/bookmarks",
				element: <BookMarks></BookMarks>,
			},
		],
	},
]);

export default router;
