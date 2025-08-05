const FoodCard = ({ item }) => {
	// console.log(length(item.keys()));
	return (
		<div>
			<div className='card bg-base-100 w-96 shadow-sm'>
				<figure>
					<img src={item.image} alt='Shoes' />
				</figure>
				<div className='card-body flex flex-col items-center'>
					<h2 className='card-title'>{item.name}</h2>
					<p className='absolute right-0 mr-4 mt-3 bg-slate-500 text-white'>
						Price :{item.price}
					</p>
					<p>Categories :{item.category}</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary border-0 border-b-4 mt-4'>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
