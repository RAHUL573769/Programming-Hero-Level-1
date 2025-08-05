/* eslint-disable no-unused-vars */
import React from "react";
import Cover from "../../../Shared/Cover";
import menuImg from "../../../assets/menu/dessert-bg.jpeg";
import SectionTitle from "../../../Shared/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import SingleMenuCategory from "../SingleMenuCategory";
import SingleMenuItems from "../../Home/SingleMenuItems";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import Offered from "./../OfferedCategories/Offered";
const MenuCategories = () => {
	const [menu] = useMenu();

	const dessert = menu.filter((x) => x.category === "dessert");
	const soup = menu.filter((x) => x.category === "soup");
	const salad = menu.filter((x) => x.category === "salad");
	const pizza = menu.filter((x) => x.category === "pizza");
	const offered = menu.filter((x) => x.category === "offered");
	// console.log(pizza);
	return (
		<div>
			<Cover image={menuImg} title={"Our Menu"}></Cover>
			<SectionTitle
				subHeading={"Don't Miss"}
				heading={"Today's Offered"}
			></SectionTitle>
			<MenuCategory items={offered}></MenuCategory>
			<SectionTitle
				subHeading={"Don't Miss"}
				heading={"Today's Dessert"}
			></SectionTitle>
			<MenuCategory
				items={dessert}
				title={"Dessert"}
				coverImg={dessertImg}
			></MenuCategory>
			<SectionTitle
				subHeading={"Don't Miss"}
				heading={"Today's Salad"}
			></SectionTitle>
			<MenuCategory
				items={salad}
				title={"Salad"}
				coverImg={dessertImg}
			></MenuCategory>
			<SectionTitle
				subHeading={"Don't Miss"}
				heading={"Today's Soup"}
			></SectionTitle>
			<MenuCategory items={soup} title={"Soup"}></MenuCategory>
			<SectionTitle
				subHeading={"Don't Miss"}
				heading={"Today's Dessert"}
			></SectionTitle>
			<MenuCategory items={pizza} title={"Dessert"}></MenuCategory>
		</div>
	);
};

export default MenuCategories;
