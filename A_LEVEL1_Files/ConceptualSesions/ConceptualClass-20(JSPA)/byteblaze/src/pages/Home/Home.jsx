import React from "react";
import Nav from "../../Components/Nav";
import Hero from "./Hero";
import waves from "../../../src/assets/wave.svg";
const Home = () => {
	return (
		<div>
			{/* <div className='h-16'>
				<Nav></Nav>
			</div> */}

			<div className='relative'>
				<Hero></Hero>
			</div>

			<img className='absolute bottom-0 w-full' src={waves}></img>
		</div>
	);
};

export default Home;
