// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
	// const [blogs, setBlogs] = useState([]);

	const data = useLoaderData();

	// useEffect(() => {
	// 	fetch("https://dev.to/api/articles?per_page=20&top=7")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// console.log(data);
	// 			setBlogs(data);
	// 		});
	// });

	return (
		<div>
			<h1>This is Blogs{data.length}</h1>

			<section className='dark:bg-gray-100 dark:text-gray-800'>
				<div className='container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
					<a
						rel='noopener noreferrer'
						href='#'
						className='block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50'
					>
						<img
							src={data[0].cover_image}
							alt=''
							className='object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500'
						/>
						<div className='p-6 space-y-2 lg:col-span-5'>
							<h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline'>
								{data[0].title}{" "}
							</h3>
							<span className='text-xs dark:text-gray-600'>
								{new Date(data[0].published_at).toLocaleDateString()}
							</span>
							<p>{data[0].description}</p>
						</div>
					</a>
					<div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{data.map((datas) => (
							<BlogCard datas={datas}></BlogCard>
						))}
					</div>
					<div className='flex justify-center'>
						<button
							type='button'
							className='px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600'
						>
							Load more posts...
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blogs;
