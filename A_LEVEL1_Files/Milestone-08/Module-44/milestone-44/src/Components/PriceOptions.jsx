import React from "react";
import PriceOpton from "./PriceOpton";

const PriceOptions = () => {
	const priceOptions = [
		{
			id: 1,
			name: "Basic Membership",
			features: ["Access to Gym Facilities"],
			price: 300,
		},
		{
			id: 2,
			name: "Basic Membership-2",
			features: ["Access to Gym Facilities"],
			price: 300,
		},
		{
			id: 3,
			name: "Basic Membership-3",
			features: ["Access to Gym Facilities"],
			price: 300,
		},
	];
	return (
		<div className='m-12'>
			<h2 className='text-5xl'>Best Prices</h2>

			<div className='grid grid-cols-3 gap-2'>
				{" "}
				{priceOptions.map((x) => (
					<PriceOpton x={x}></PriceOpton>
				))}
			</div>
		</div>
	);
};

export default PriceOptions;
