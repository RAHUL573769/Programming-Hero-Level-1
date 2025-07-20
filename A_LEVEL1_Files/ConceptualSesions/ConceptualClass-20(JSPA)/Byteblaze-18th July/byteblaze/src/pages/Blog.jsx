import React, { useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const Blog = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const navigation = useNavigation();
	const data = useLoaderData();
	// const params = useParams();

	if (navigation.state === "loading") return <Loader></Loader>;
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

				<Link
					to='author'
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
				</Link>
			</div>
			<Outlet></Outlet>
			{/* <div>{data.tags.map(tag=>)}</div> */}
		</div>
	);
};

export default Blog;
