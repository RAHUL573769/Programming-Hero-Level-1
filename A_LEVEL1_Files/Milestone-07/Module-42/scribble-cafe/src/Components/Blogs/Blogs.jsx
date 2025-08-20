import React, { useEffect, useState } from "react";
import SingleBlogs from "./SingleBlogs";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	console.log(blogs);
	return (
		<div className='md:w-2/3'>
			<h1 className='text-4xl'>Blogs{blogs.length}</h1>

			{blogs.map((blog) => (
				<SingleBlogs blog={blog}></SingleBlogs>
			))}
		</div>
	);
};

export default Blogs;
