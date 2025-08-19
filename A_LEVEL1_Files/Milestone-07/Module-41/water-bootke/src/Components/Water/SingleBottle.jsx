import React from "react";

const SingleBottle = ({ bottles, handleAddToCart }) => {
	// console.log(bottles);
	return (
		<div className='bottle'>
			<h2>Bottles Available :{bottles.length}</h2>

			<h3>Name:{bottles?.name}</h3>
			<img src={bottles?.img}></img>
			<div>
				{" "}
				<button onClick={() => handleAddToCart(bottles)}>Purchase</button>
			</div>
		</div>
	);
};

export default SingleBottle;
