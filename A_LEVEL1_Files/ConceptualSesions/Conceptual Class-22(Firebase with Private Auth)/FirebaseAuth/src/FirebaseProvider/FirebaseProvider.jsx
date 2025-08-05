/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
	createUserWithEmailAndPassword,
	GithubAuthProvider,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";

const FirebaseProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	// const googleProvider = new firebase.auth.GoogleAuthProvider();
	// firebase.auth().signInWithRedirect(provider);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
				setLoading(false);
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				// ...
			} else {
				setUser(null);
				// User is signed out
				// ...
			}
		});
		return () => {
			unSubscribe();
		};
	}, [user]);

	const signInWithEmailPassword1 = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const verifyEmail = async () => {
		await sendEmailVerification(auth.currentUser);
		alert("Email verification sent!");
	};

	const googleLogin = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const gitHubLogin = () => {
		signInWithPopup(auth, githubProvider)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSignOut1 = () => {
		signOut(auth)
			.then(() => {
				setUser(null);
				console.log(auth);
				alert("SignOut Done");
			})
			.catch((error) => {
				console.log("handleSignOut1", error);
				// An error happened.
			});
	};

	const data = {
		name: "Rahul",
		createUser,
		user,
		setUser,
		loading,
		signInWithEmailPassword1,
		verifyEmail,
		googleLogin,
		gitHubLogin,
		handleSignOut1,
	};

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default FirebaseProvider;
