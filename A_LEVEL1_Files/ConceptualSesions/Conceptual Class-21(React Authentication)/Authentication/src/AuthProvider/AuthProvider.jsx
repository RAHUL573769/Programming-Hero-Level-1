/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const provider = new GoogleAuthProvider();
	const [loading, setLoading] = useState(true);
	const registerUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const loginUsingGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				console.log("Current User", currentUser);

				setUser(currentUser);
				setLoading(false);

				// ...
			} else {
				setUser(null);
				console.log("User Signed out");
				// ...
			}
		});

		return () => {
			unSubscribe();
		};
	}, []);
	const info = {
		registerUser,
		loading,
		loginUser,
		setUser,
		user,
		loginUsingGoogle,
	};
	return (
		<div>
			<AuthContext.Provider value={info}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
