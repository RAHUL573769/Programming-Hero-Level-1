import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log("Location From Protected", location);
	if (loading) {
		return <span className='loading loading-spinner'></span>;
	}
	if (user) {
		return children;
	}

	return <Navigate to='/login' state={location.pathname}></Navigate>;
};

export default ProtectedRoute;
