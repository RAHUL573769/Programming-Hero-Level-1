import React from "react";
import SingleMenuItems from "../../Home/SingleMenuItems";
import Cover from "../../../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
	// console.log(items);

	return (
		<div>
			{" "}
			{title && <Cover img={coverImg}></Cover>}
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{items.map((item) => (
					<SingleMenuItems item={item}></SingleMenuItems>
				))}
			</div>
			<Link to={`/orders/${title}`}>
				<button className='btn btn-outline border-0 border-b-4 mt-4'>
					Order Now
				</button>
			</Link>
		</div>
	);
};

export default MenuCategory;
