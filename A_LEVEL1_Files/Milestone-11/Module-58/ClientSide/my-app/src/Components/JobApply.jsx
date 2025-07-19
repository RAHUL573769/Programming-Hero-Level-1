import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	// console.log(id);
	const { user } = useAuth();
	// console.log(id, user);
	// const submitJobApplication = (e) => {
	// 	e.preventDefault();
	// 	const form = e.target;
	// 	const linkedIn = form.linkedIn.value;
	// 	const github = form.github.value;
	// 	const resume = form.resume.value;

	// 	// console.log(linkedIn, github, resume);

	// 	const jobApplication = {
	// 		job_id: id,
	// 		applicant_email: user.email,
	// 		linkedIn: linkedIn,
	// 		github,
	// 		resume,
	// 	};

	// 	fetch("http://localhost:5000/job-applications", {
	// 		method: "POST",
	// 		headers: {
	// 			"content-type": "application/json",
	// 		},
	// 		body: JSON.stringify(jobApplication),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			// if (data.insertedId) {
	// 			// 	Swal.fire({
	// 			// 		position: "top-end",
	// 			// 		icon: "success",
	// 			// 		title: "Your work has been saved",
	// 			// 		showConfirmButton: false,
	// 			// 		timer: 1500,
	// 			// 	});
	// 			// 	navigate("/myApplications");
	// 			// }
	// 		});
	// };
	const handleJobApplication = (e) => {
		e.preventDefault();
		const form = e.target;
		const linkedIn = form.linkedIn.value;

		const gitHub = form.github.value;
		const resume = form.resume.value;
		// console.log(linkedIn, gitHub, resume);

		const jobApplication = {
			job_id: id,
			applicant_id: user.email,
			linkedIn: linkedIn,
			gitHub: gitHub,
			resume: resume,
		};
		// console.log("Job Application", jobApplication);
		fetch("http://localhost:5000/jobApplicationCollection", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(jobApplication),
		})
			.then((response) => {
				// console.log(response);
				// Handle the response
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json(); // Or response.text() if not expecting JSON
			})
			.then((data) => {
				alert("Data Added");
				console.log(data);
				navigate("/myApplications");
			});
	};
	return (
		<div>
			<h2>Job Apply</h2>
			<div>
				<div>
					<div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
						<form onSubmit={handleJobApplication} className='card-body'>
							<fieldset className='fieldset'>
								<label className='label'>LinkedIn URL</label>
								<input
									type='url'
									className='input'
									placeholder='LinkedI Url'
									name='linkedIn'
								/>
								<label className='label'>Github URL</label>
								<input
									type='url'
									className='input'
									placeholder='Github Url'
									name='github'
								/>
								<label className='label'>Resume URL</label>
								<input
									type='url'
									className='input'
									placeholder='Resume Url'
									name='resume'
								/>

								<button className='btn btn-neutral mt-4'>Apply Now</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobApply;
