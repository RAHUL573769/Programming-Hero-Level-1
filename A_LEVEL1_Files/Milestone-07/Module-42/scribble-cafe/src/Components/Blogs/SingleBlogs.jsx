import { FaBook } from "react-icons/fa";

const SingleBlogs = ({ blog, handleBookmark }) => {
	// console.log(blog);

	const { hashtags } = blog;
	return (
		<div className='mb-20 '>
			<img className='w-full mb-8' src={blog?.cover}></img>

			<div className='flex justify-between mb-4 '>
				<div>
					<img className='w-16' src={blog?.author_img}></img>
					<div className='ml-6'>
						<h3>{blog?.author}</h3>
						<p>{blog?.posted_date}</p>
					</div>
				</div>
				<div>
					<span>{blog?.reading_time} min ago</span>
					<button
						onClick={() => handleBookmark(blog)}
						className='ml-2 text-red-500'
					>
						<FaBook />
					</button>
				</div>
			</div>
			<h2 className='text-4xl'>{blog?.title}</h2>
			{hashtags.map((x) => (
				<span>
					<a>#{x}</a>
				</span>
			))}
		</div>
	);
};

export default SingleBlogs;
