import React from "react";

const SingleProducts = ({ product, handleCart }) => {
	// console.log(product);
	return (
		<div>
			<div className='card-details'>
				<img className='card-img' src={product.image}></img>

				<p className='text-bold'>{product.category}</p>

				<p className='text-bold'>{product.title.slice(0, 10)}</p>
				<div className='card-footer'>
					<h1>${product.price}</h1>
					<button onClick={() => handleCart(product)}>Add To Cart</button>
				</div>
			</div>
		</div>
	);
};

export default SingleProducts;
