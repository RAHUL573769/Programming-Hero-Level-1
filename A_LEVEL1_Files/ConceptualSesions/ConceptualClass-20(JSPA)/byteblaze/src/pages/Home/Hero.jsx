import React from "react";

const Hero = () => {
	return (
		<div>
			<div className='hero bg-base-200 min-h-screen'>
				<div className='hero-content text-center'>
					<div className='max-w-lg'>
						<h1 className='text-5xl font-bold'>Welcome to ByteBlaze</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<div className='flex gap-2 justify-center'>
							<a
								href='#_'
								class='relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50'
							>
								<span class='absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
								<span class='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
									<svg
										class='w-5 h-5'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M14 5l7 7m0 0l-7 7m7-7H3'
										></path>
									</svg>
								</span>
								<span class='relative'>Bookmarks</span>
							</a>

							<a
								href='#_'
								class='relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500'
							>
								<span class='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700'></span>
								<span class='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease'></span>
								<span class='relative text-white'>Read Blogs</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
