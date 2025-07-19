import React, { useContext, useEffect, useState } from "react";
// import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthContext/AuthContext";

const MyApplications = () => {
	const { user } = useContext(AuthContext);
	// const { user } = useAuth();

	const [jobs, setJobs] = useState([]);
	// console.log("User Data", user);
	useEffect(() => {
		fetch(`http://localhost:5000/jobsApplicationByEmail?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("Data", data);
				setJobs(data);
			});
	}, [user.email]);
	return (
		<div>
			<h2>My Application:{jobs.length}</h2>
		</div>
	);
};

export default MyApplications;
