import { useState } from "react";

/* eslint-disable no-unused-vars */
const SingleProduct = ({ product, handleMarkVisited }) => {
	const { id, title, images } = product;
	const [visited, setVisited] = useState(false);

	const handleVisited = () => {
		setVisited(!visited);
	};

	const passWithParams = () => {
		handleMarkVisited(product);
	};

	// console.log(product);
	return (
		<div className={`country ${visited && "visited"}`}>
			<h1 style={{ color: visited ? "Purple" : "red" }}>
				Product Title:{product?.title}
			</h1>
			<img src={product?.images}></img>
			<p>Price :{product?.price}</p>

			<button onClick={() => passWithParams(product)}>Mark Visited</button>
			<button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
			{/* <button onClick={handleVisited}>Visited</button> */}
			{/* {visited && <p>I have visited this Country</p>} */}

			{visited ? "I have visited" : "I want to visit"}
		</div>
	);
};

export default SingleProduct;
