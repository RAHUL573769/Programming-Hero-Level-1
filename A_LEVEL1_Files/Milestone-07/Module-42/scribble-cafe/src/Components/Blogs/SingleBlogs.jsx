import React from "react";

const SingleBlogs = ({ blog }) => {
	// console.log(blog);
	return (
		<div>
			<img src={blog?.cover}></img>

			<div className='flex justify-between '>
				<div>
					<img className='w-16' src={blog?.author_img}></img>
					<div className='ml-6'>
						<h3>{blog?.author}</h3>
						<p>{blog?.posted_date}</p>
					</div>
				</div>
				<div>
					<span>{blog?.reading_time} min ago</span>
				</div>
			</div>
			<h2 className='text-4xl'>{blog?.title}</h2>
		</div>
	);
};

export default SingleBlogs;
