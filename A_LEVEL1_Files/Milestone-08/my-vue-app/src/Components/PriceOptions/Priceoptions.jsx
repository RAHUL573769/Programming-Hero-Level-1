import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Priceoptions = () => {
	const priceOptions = [
		{
			id: 1,
			name: "Basic Plan",
			price: 30,
			features: ["Access to gym equipment", "Locker facility", "Free Wi-Fi"],
		},
		{
			id: 2,
			name: "Standard Plan",
			price: 50,
			features: [
				"Access to gym equipment",
				"Locker facility",
				"Free Wi-Fi",
				"Group fitness classes",
				"1 Personal training session per month",
			],
		},
		{
			id: 3,
			name: "Premium Plan",
			price: 80,
			features: [
				"Access to gym equipment",
				"Locker facility",
				"Free Wi-Fi",
				"Unlimited group fitness classes",
				"4 Personal training sessions per month",
				"Sauna access",
			],
		},
		{
			id: 4,
			name: "VIP Plan",
			price: 120,
			features: [
				"24/7 Gym access",
				"Private locker room",
				"Personal diet consultation",
				"Unlimited personal training sessions",
				"Spa and sauna access",
				"Free gym merchandise",
			],
		},
	];

	return (
		<div>
			<h2 className='text-5xl'>Best Price in Town</h2>
			<div className='grid grid-cols-3 gap-4'>
				{" "}
				{priceOptions.map((option) => (
					<PriceOption key={option.id} option={option}></PriceOption>
				))}
			</div>
		</div>
	);
};

export default Priceoptions;
