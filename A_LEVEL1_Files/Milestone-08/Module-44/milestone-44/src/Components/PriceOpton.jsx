import React from "react";

const PriceOpton = ({ x }) => {
	console.log(x);
	return (
		<div className='bg-blue-700 rounded-md p-6 text-white'>
			<h2>
				<span className='text-4xl'>Name:{x?.name}</span>
				<br></br>
				<span>Price:{x?.price}</span>
			</h2>
		</div>
	);
};

export default PriceOpton;
