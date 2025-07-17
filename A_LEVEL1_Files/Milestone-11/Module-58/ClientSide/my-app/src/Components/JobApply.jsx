import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const JobApply = () => {
	const { id } = useParams();
	const { user } = useAuth();
	console.log(id, user);

	const handleJobApplication = (e) => {
		e.preventDefault();
		const form = e.target;
		const linkedIn = form.LinkedIn.value;

		const gitHub = form.github.value;
		const resume = form.resume.value;
		console.log(linkedIn, gitHub, resume);

		const jobApplication = {
			job_id: id,
			applicant_id: user.email,
			linkedIn: linkedIn,
			gitHub: gitHub,
			resume: resume,
		};
		fetch("http://localhost:5000/jobApplicationCollection", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(jobApplication),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
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
									name='LinkedIn'
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
