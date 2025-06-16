import React from "react";

const Hero = () => {
	return (
		<div>
			<div className='hero bg-base-200 '>
				<div className='hero-content text-center'>
					<div className='max-w-lg'>
						<h1 className='text-5xl font-bold'>
							Welcome to{" "}
							<span className='text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>
								Byte Blaze
							</span>
						</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<div className='flex gap-2 justify-center '>
							<a
								href='#_'
								class='rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white'
							>
								<span class='absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10'></span>
								<span class='relative'>Read Blogs</span>
							</a>
							<a
								href='#_'
								class='rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white'
							>
								<span class='absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease'></span>
								<span class='relative text-indigo-600 transition duration-300 group-hover:text-white ease'>
									Bookmarks
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
