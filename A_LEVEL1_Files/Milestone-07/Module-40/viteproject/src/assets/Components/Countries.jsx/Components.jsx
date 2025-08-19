import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProducts/SingleProduct";

const Components = () => {
	const [products, setProducts] = useState([]);
	const [visitedProducts, setVisitedProducts] = useState([]);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	const handleMarkVisited = (country) => {
		// const newVisitedCountry1 = [...newVisitedCountry, country];
		// setNewVisitedCountry(newVisitedCountry1);

		const newVisitedProducts = [...visitedProducts, country];
		setVisitedProducts(newVisitedProducts);
	};
	return (
		<div className='country-container'>
			Products :{products.length}
			Visited:{visitedProducts.length}
			{products.map((product) => (
				<SingleProduct
					handleMarkVisited={handleMarkVisited}
					key={product.id}
					product={product}
					// newVisitedCountry={newVisitedCountry}
				></SingleProduct>
			))}
		</div>
	);
};

export default Components;
