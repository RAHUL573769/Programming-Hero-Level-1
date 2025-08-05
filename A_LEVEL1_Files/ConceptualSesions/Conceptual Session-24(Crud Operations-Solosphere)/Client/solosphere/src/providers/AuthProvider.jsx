import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
	const value = { name: "Rahul Rudra" };
	return (
		<div>
			<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
