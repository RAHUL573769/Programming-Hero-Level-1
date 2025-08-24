import React from "react";

const SingleBooks = ({ book }) => {
	const { tags } = book;
	console.log(book);
	return (
		<div>
			<div className='card bg-base-100 w-96 shadow-xl p-6 rounded-2xl '>
				<figure className='bg-blue-200 py-8 rounded-2xl px-2'>
					<img className='h-[166px]' src={book?.image} alt={book?.bookName} />
				</figure>
				<div className='card-body'>
					<div className='flex justify-center gap-4'>
						{tags.map((tag) => (
							<button className='btn btn-xs '>{tag}</button>
						))}
					</div>
					<h2 className='card-title'>
						{book?.bookName}
						<div className='badge badge-secondary'>NEW</div>
					</h2>
					<p>Author:{book?.author}</p>
					<div className='divider bor'></div>
					<div className='card-actions justify-end'>
						<div className='badge badge-outline'>Fashion</div>
						<div className='badge badge-outline'>Products</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleBooks;
