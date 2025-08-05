import React from "react";
import FoodCard from "../../../Shared/FoodCard";

const OrderTab = ({ item }) => {
	return (
		<div>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{" "}
				{item.map((item) => (
					<FoodCard item={item}></FoodCard>
				))}
			</div>
		</div>
	);
};

export default OrderTab;
