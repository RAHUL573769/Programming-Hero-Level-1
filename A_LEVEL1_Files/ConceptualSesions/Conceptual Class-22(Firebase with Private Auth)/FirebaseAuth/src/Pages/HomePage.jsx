import React, { useContext } from "react";
import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
	const { user } = useContext(AuthContext);

	// const data = user === null || user === undefined ? undefined : user.email;
	const data = user?.email;

	console.log(user);
	return (
		<div>
			<h1>This is Home Page for User{data}</h1>
		</div>
	);
};

export default HomePage;
