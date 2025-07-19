import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Register from "../../Components/Register";
import Login from "../../Components/Login";
import Home from "../../Home/Home";
import JobDetails from "../../Components/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../../Components/JobApply";
import MyApplications from "../../Components/MyApplications";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <h1>Page Not Found</h1>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/jobs/:id",
				element: (
					<PrivateRoute>
						<JobDetails></JobDetails>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/jobs/${params.id}`),
			},

			{
				path: "/myApplications",
				element: (
					<PrivateRoute>
						<MyApplications></MyApplications>,
					</PrivateRoute>
				),
			},

			{
				path: "/jobApply/:id",
				element: (
					<PrivateRoute>
						<JobApply></JobApply>
					</PrivateRoute>
				),
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{ path: "/login", element: <Login></Login> },
		],
	},
]);

export default router;
