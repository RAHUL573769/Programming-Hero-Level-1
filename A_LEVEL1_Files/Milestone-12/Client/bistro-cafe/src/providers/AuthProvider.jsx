/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	reload,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import useAxiosPublic from "../hooks/useAxiosPublic";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const axiosPublic = useAxiosPublic();
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
			if (currentUser) {
				//get token and store in database
				const userInfo = { email: currentUser.email };
				axiosPublic.post("/jwt", userInfo).then((res) => {
					console.log("Token inside AuthProvider", res.data.token);
					// reload();
					if (res.data.token) {
						localStorage.setItem("access-token", res.data.token);
					}
				});
			} else {
				//do something
				localStorage.removeItem("access-token");
			}
			console.log(currentUser);
			setLoading(false);
		});
		return () => {
			return unSubscribe();
		};
	}, [axiosPublic]);

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
