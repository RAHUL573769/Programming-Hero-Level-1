/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUserWithEmailPasswordFunction = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signInWithEmailAndPasswordFunction = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signInWithGoogle = () => {
		return signInWithPopup(auth, provider);
	};

	const logOut = () => {
		setLoading(true);
		signOut(auth)
			.then(() => {
				console.log(" Sign-out successful");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(`${currentUser.email}  User is Logged In`);

			console.log(currentUser);
			setLoading(false);
		});
		return () => {
			return unSubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUserWithEmailPasswordFunction,
		logOut,
		signInWithEmailAndPasswordFunction,
		signInWithGoogle,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
