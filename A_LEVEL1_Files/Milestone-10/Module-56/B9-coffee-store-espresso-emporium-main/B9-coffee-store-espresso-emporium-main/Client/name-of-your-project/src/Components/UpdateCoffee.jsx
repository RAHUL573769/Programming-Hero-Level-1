/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const data = useLoaderData();
	const { _id, name, quantity, supplier, taste, category, details, photo } =
		data;
	console.log(data);

	const handleUpdateCoffee = (event) => {
		event.preventDefault();
		const form = event.target;

		const name = form.coffee.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const newCoffeeData = {
			name: name,
			quantity: quantity,
			supplier: supplier,
			taste: taste,
			category: category,
			details: details,
			photo: photo,
		};
		console.log(newCoffeeData);

		fetch(`http://localhost:5000/updateCoffee/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newCoffeeData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Success!",
						text: "User Data Updated Successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
				}
			});
	};
	return (
		<div>
			Update {name}
			<form onSubmit={handleUpdateCoffee}>
				<div className='flex'>
					<div className='form-control md:w-1/2 ml-5 mb-8 '>
						{" "}
						<label className='label'>Coffee Name</label>
						<br></br>
						<input
							type='text'
							className='input'
							name='coffee'
							defaultValue={name}
							placeholder='Coffee Name'
						/>
					</div>
					<div className='form-control md:w-1/2 '>
						{" "}
						<label className='label'>Available Quantity</label>
						<br></br>
						<input
							type='text'
							className='input'
							name='quantity'
							placeholder='Available Quantity'
						/>
					</div>
				</div>
				<div className='flex'>
					<div className='form-control md:w-1/2 ml-5 mb-8 '>
						{" "}
						<label className='label'>Supplier </label>
						<br></br>
						<input
							type='text'
							name='supplier'
							className='input'
							placeholder='Supplier  Name'
						/>
					</div>
					<div className='form-control md:w-1/2  mb-8'>
						{" "}
						<label className='label'>Taste</label>
						<br></br>
						<input
							type='text'
							name='taste'
							className='input'
							placeholder='Taste'
						/>
					</div>
				</div>
				<div className='flex'>
					<div className='form-control md:w-1/2 ml-5 mb-8 '>
						{" "}
						<label className='label'>Category </label>
						<br></br>
						<input
							type='text'
							name='category'
							className='input'
							placeholder='Category  Name'
						/>
					</div>
					<div className='form-control md:w-1/2 '>
						{" "}
						<label className='label'>Details</label>
						<br></br>
						<input
							type='text'
							name='details'
							className='input'
							placeholder='Details'
						/>
					</div>
				</div>
				<div className='form-control md:w-1/2 ml-5 '>
					{" "}
					<label className='label'>Photo URL</label>
					<br></br>
					<input
						type='text'
						name='photo'
						className='input'
						placeholder='Photo URL'
					/>
				</div>
				<button className='btn btn-soft w-'>Submit</button>
			</form>
		</div>
	);
};

export default UpdateCoffee;
