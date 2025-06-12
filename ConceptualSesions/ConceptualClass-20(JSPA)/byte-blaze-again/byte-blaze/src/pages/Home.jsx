import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import waves from "../assets/wave.svg";
const Home = () => (
	<div>
		{/* <div className='h-16'>
            {" "}
            <Nav></Nav>
        </div> */}

		<div className='min-h-[calc(100vh-120px)] relative  flex flex-col items-center justify-center'>
			{" "}
			<Hero></Hero>
		</div>
		<div>
			<img className='absolute bottom-0 w-full' src={waves} />
		</div>
	</div>
);

export default Home;
