import React from "react";
import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import Categories from "./Categories";
import PopularMenu from "./PopularMenu";
import FeaturedItems from "./FeaturedItems";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Categories></Categories>
			<PopularMenu></PopularMenu>
			<FeaturedItems></FeaturedItems>
		</div>
	);
};

export default Home;
