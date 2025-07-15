/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
const Banner = () => {
	return (
		<div>
			<div className='hero bg-base-200 min-h-96'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<img
						src='https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'
						className='max-w-sm rounded-lg shadow-2xl'
					/>
					<div>
						<motion.h1
							animate={{
								scale: [1, 2, 2, 1, 1],
								rotate: [0, 0, 180, 180, 0],
								borderRadius: ["0%", "0%", "50%", "50%", "0%"],
							}}
							transition={{
								duration: 2,
								ease: "easeInOut",
								times: [0, 0.2, 0.5, 0.8, 1],
								repeat: Infinity,
								repeatDelay: 1,
							}}
							className='text-5xl font-bold'
						>
							Box Office News!
						</motion.h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className='btn btn-primary'>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
