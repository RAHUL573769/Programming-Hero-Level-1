import { useEffect, useState } from "react";
import "./App.css";
import SingleProducts from "./SingleProducts";

function App() {
	const [products, setProducts] = useState([]);

	const [card, setCart] = useState([]);
	useEffect(() => {
		fetch("../public/fakeData.json")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				console.log(data);
			});
	}, []);

	const handleCart = (product) => {
		// const isExists = card.find((pd) => pd.id === p.id);

		// if (!isExists) {
		// 	setCart([p]);
		// } else {
		// 	alert("Product Already Exists");
		// }
		// console.log(card);

		setCart([product]);
	};
	return (
		<>
			<div className='main-container'>
				<div className='card-container'>
					{products.map((product) => (
						<SingleProducts
							key={product.id}
							product={product}
							handleCart={handleCart}
						></SingleProducts>
					))}
				</div>
				<div className='cart-container'>
					{/* <div className='cart-title'>
						<h5>Name</h5>
						<h5>Price</h5>
					</div> */}

					<div>
						{card.map((item) => {
							// console.log(item.title);
							<div className='cart-info'>
								<h1>Name:{item.title}</h1>
								<h5>Price</h5>
							</div>;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
