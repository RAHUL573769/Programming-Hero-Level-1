/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import placeHolder from "../../src/assets/404.jpg";
const BlogCard = ({ datas }) => {
	console.log(datas);
	const {
		cover_image,
		title,
		description,

		created_at,
		last_comment_at,
		published_at,
		published_timestamp,
		id,
	} = datas;
	return (
		<div>
			<Link
				to={`/blog/${id}`}
				rel='noopener noreferrer'
				href='#'
				className='max-w-sm mx-auto group hover:no-underline hover:border-orange-600 focus:no-underline dark:bg-gray-50'
			>
				<img
					role='presentation'
					className='object-cover w-full rounded h-44 dark:bg-gray-500'
					src={cover_image || placeHolder}
				/>
				<div className='p-6 space-y-2'>
					<h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
						{title}
					</h3>
					<span className='text-xs dark:text-gray-600'>
						{new Date(published_at).toLocaleDateString()}
					</span>
					<p>{description}</p>
				</div>
			</Link>
		</div>
	);
};

export default BlogCard;
