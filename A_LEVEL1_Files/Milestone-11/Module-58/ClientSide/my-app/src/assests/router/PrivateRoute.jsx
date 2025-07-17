import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Navigate, useLoaderData } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	const location = useLoaderData();

	// console.log("Location", location);

	if (loading) {
		return <span className='loading loading-spinner'></span>;
	}

	if (user) {
		return children;
	}
	return <Navigate to='/login' state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
