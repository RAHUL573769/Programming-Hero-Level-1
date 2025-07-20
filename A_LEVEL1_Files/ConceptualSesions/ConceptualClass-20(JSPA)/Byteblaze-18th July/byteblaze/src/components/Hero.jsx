import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div>
			<div className='hero -mt-16'>
				<div className='hero-content text-center'>
					<div className='max-w-md'>
						<h1 className='text-5xl font-bold'>Hello there</h1>

						<span class='text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>
							My gradient text
						</span>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<div className=' flex gap-2 justify-center'>
							<Link
								to='/blogs'
								class='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
							>
								<span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent'>
									Blogs
								</span>
							</Link>
							<Link
								to='/bookmarks'
								class='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
							>
								<span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent'>
									BookMarks
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
