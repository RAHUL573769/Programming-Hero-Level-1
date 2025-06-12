import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
	const { cover_image, description, title, published_at, id } = blog;
	console.log(id);
	return (
		<div>
			{" "}
			<Link
				to={`blogs/${id}`}
				rel='noopener noreferrer'
				href='#'
				className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-primary hover:border-secondary  border-opacity-10'
			>
				<img
					role='presentation'
					className='object-cover w-full rounded h-44 dark:bg-gray-500'
					src={cover_image}
				/>
				<div className='p-6 space-y-2'>
					<h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
						{title}
					</h3>
					<span className='text-xs dark:text-gray-600'>
						{new Date(published_at).toLocaleTimeString()}
					</span>
					<p>{description}</p>
					<p>Published At: {}</p>
				</div>
			</Link>
		</div>
	);
};

export default BlogCard;
