import React from "react";
import Feature from "../Features/Feature";

const PriceOption = ({ option }) => {
	const { name, price, features } = option;
	return (
		<div className='bg-blue-500 rounded-4xl text-white '>
			<h2 className='text-center'>
				<span className='text-5xl'>{price}</span>
				<span>/month</span>
			</h2>
			<h4 className='text-3xl'>{name}</h4>

			{features.map((sfeature) => (
				<Feature sfeature={sfeature}></Feature>
			))}
		</div>
	);
};

export default PriceOption;
