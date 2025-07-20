import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const data = useLoaderData();
	// const params = useParams();
	console.log(data);
	return (
		<div>
			<div className='card bg-base-100 w-96 shadow-sm'>
				<figure>
					<img src={data.cover_image} alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{data.title}</h2>
					<p>{new Date(data.published_at).toLocaleDateString()}</p>
				</div>
			</div>

			<div className='flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800'>
				<Link
					onClick={() => setTabIndex(1)}
					className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
						tabIndex === 1 ? "border border-b-0" : "border-b"
					}`}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-4 h-4'
					>
						<path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
					</svg>
					<span>Architecto</span>
				</Link>
				<a
					onClick={() => setTabIndex(2)}
					className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
						tabIndex === 2 ? "border border-b-0" : "border-b"
					}`}
					href='#'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-4 h-4'
					>
						<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
						<path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
					</svg>
					<span>Corrupti</span>
				</a>
				<a
					href='#'
					className='flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-4 h-4'
					>
						<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
					</svg>
					<span>Excepturi</span>
				</a>
				<a
					rel='noopener noreferrer'
					href='#'
					className='flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-4 h-4'
					>
						<circle cx='12' cy='12' r='10'></circle>
						<polygon points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'></polygon>
					</svg>
					<span>Consectetur</span>
				</a>
			</div>
		</div>
	);
};

export default Blog;
