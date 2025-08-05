import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";

import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../../Shared/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Shared/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
const OrderMainLayout = () => {
	const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
	const { category } = useParams();

	const initialIndex = categories.indexOf(categories);
	const [tabIndex, setIndex] = useState(initialIndex);

	const [menu] = useMenu();

	console.log(category);

	const dessert = menu.filter((x) => x.category === "dessert");
	const soup = menu.filter((x) => x.category === "soup");
	const salad = menu.filter((x) => x.category === "salad");
	const pizza = menu.filter((x) => x.category === "pizza");
	const offered = menu.filter((x) => x.category === "offered");
	return (
		<div>
			{/* <img src={orderImg}></img> */}
			<Cover title={"Our Orders"} image={orderImg}></Cover>

			<Tabs default={tabIndex} onSelect={(index) => setIndex(index)}>
				<TabList>
					<Tab>Salad</Tab>
					<Tab>Pizza</Tab>
					<Tab>Soup</Tab>
					<Tab>Desserts</Tab>
					<Tab>Drinks</Tab>
				</TabList>

				<TabPanel>
					<OrderTab item={salad}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab item={pizza}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab item={soup}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab item={dessert}></OrderTab>
				</TabPanel>
				<TabPanel>
					<OrderTab item={offered}></OrderTab>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default OrderMainLayout;
