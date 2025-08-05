import React from "react";

const SingleMenuItems = ({ item }) => {
	// console.log(item);
	return (
		<div className='flex space-x-6'>
			<img
				style={{ borderRadius: "0 200px 200px 200px" }}
				className='w-[120px]'
				src={item.image}
			></img>
			<div>
				<h3 className='uppercase'>{item.name}</h3>
				<p>{item.recipe}</p>
				<p className='text-yellow-500'>${item.price}</p>
			</div>
		</div>
	);
};

export default SingleMenuItems;
