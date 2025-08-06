// import React, { useContext } from "react";
// import { AuthContext } from "../providers/AuthContext";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
// 	const { user, loading } = useContext(AuthContext);
// 	const location = useLocation();
// 	console.log(user);

// 	if (loading) {
// 		return <span className='loading loading-ring loading-xs'></span>;
// 	}
// 	if (user) {
// 		return children;
// 	}
// 	return <Navigate to='/login' state={location.pathname} replace />;
// };

// export default PrivateRoute;

import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log(location);
	if (loading) {
		return <span className='loading loading-spinner'></span>;
	}
	if (user) {
		return children;
	}
	return <Navigate to='/login' state={location.pathname}></Navigate>;
};

export default PrivateRoute;
