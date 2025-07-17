import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
	const specificJob = useLoaderData();
	// console.log("Specific", specificJob);

	const { title, company, _id } = specificJob;
	return (
		<div className='m-10 border border-amber-500'>
			<h2 className='text-3xl'>Job Details For :{title}</h2>
			<p>Apply For :{company}</p>
			<Link to={`/jobApply/${_id}`}>
				<button className='btn btn-primary'>Apply Now</button>
			</Link>
		</div>
	);
};

export default JobDetails;
