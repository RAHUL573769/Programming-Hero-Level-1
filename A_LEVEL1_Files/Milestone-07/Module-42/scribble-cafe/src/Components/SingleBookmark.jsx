import React from "react";
import { MdDelete } from "react-icons/md";

const SingleBookmark = ({ x, handleDelete }) => {
	console.log(x);
	return (
		<div className='bg-slate-500 p-4 m-4 rounded-4xl'>
			<h3 className='text-3xl'>{x.title}</h3>

			<button onClick={() => handleDelete(x)} className='ml-2 text-red-500'>
				<MdDelete />
			</button>
		</div>
	);
};

export default SingleBookmark;
