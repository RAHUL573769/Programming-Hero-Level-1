import React from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
	const authInfo = { name: "Rahul Rudra" };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
