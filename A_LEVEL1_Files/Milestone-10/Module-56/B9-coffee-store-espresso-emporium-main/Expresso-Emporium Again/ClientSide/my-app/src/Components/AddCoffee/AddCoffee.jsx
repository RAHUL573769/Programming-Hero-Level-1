/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const AddCoffee = () => {
	const navigate = useNavigate();
	const handleAddCoffee = (event) => {
		event.preventDefault();
		const form = event.target;

		const name = event.target.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;

		const data = { name, quantity, supplier, taste, category, details };

		console.log(data);

		fetch("http://localhost:5000/addCoffee", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert("Data Added");
				}
				navigate("/");
			});
	};
	return (
		<div>
			<h1 className='text-center font-bold mb-4  py-4 '>Add Coffee</h1>

			<form onSubmit={handleAddCoffee}>
				<div className='flex '>
					<div className='form-control md:w-1/2 ml-5 mb-8'>
						{" "}
						<label className='input input-bordered flex items-center gap-2'>
							Coffee Name
						</label>
						<input
							type='text'
							placeholder='Type Coffee Name'
							className='input'
							name='name'
						/>
					</div>
					<div className='form-control md:w-1/2 ml-5 mb-8'>
						{" "}
						<label className='input input-bordered flex items-center gap-2'>
							Coffee Quantity
						</label>
						<input
							type='text'
							placeholder='Type Coffee Name'
							className='input'
							name='quantity'
						/>
					</div>
				</div>
				<div className='flex '>
					<div className='form-control md:w-1/2 ml-5 mb-8'>
						{" "}
						<label className='input input-bordered flex items-center gap-2'>
							Coffee Supplier
						</label>
						<input
							type='text'
							placeholder='Type Coffee Name'
							className='input'
							name='supplier'
						/>
					</div>
					<div className='form-control md:w-1/2 ml-5 mb-8'>
						{" "}
						<label className='input input-bordered flex items-center gap-2'>
							Coffee Taste
						</label>
						<input
							type='text'
							placeholder='Type Coffee Name'
							className='input'
							name='taste'
						/>
					</div>
				</div>
				<div className='flex '>
					<div className='form-control md:w-1/2 ml-5 mb-8'>
						{" "}
						<label className='input input-bordered flex items-center gap-2'>
							Coffee Category
						</label>
						<input
							type='text'
							placeholder='Coffee Category'
							className='input'
							name='category'
						/>
					</div>
					<div className='form-control md:w-1/2 ml-5 mb-8'>
						{" "}
						<label className='input input-bordered flex items-center gap-2'>
							Coffee Details
						</label>
						<input
							type='text'
							placeholder='Coffee Details'
							className='input'
							name='details'
						/>
					</div>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default AddCoffee;
