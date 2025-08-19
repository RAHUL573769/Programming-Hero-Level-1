import { useEffect, useState } from "react";
import SingleBottle from "./SingleBottle";
import { addToLocalStorage, getStoredCart } from "../../utils/localstorage";
import Cart from "../Cart/Cart";

const WaterBootle = () => {
	const [bottles, setBottles] = useState([]);

	const [cart, setCart] = useState([]);
	const handleAddToCart = (bottles) => {
		console.log(bottles);

		const newCart = [...cart, bottles];
		setCart(newCart);

		addToLocalStorage(bottles.id);
	};
	useEffect(() => {
		fetch("bottle.json")
			.then((res) => res.json())
			.then((data) => setBottles(data));
	}, []);

	useEffect(() => {
		if (bottles.length > 0) {
			const storedCart = getStoredCart();
			const savedCart = [];
			for (const id of storedCart) {
				console.log(id);
				const bottle = bottles.find((bottle) => bottle.id === id);
				if (bottle) {
					savedCart.push(bottle);
				}
			}
			console.log(savedCart, "saved-cart");
			setCart(savedCart);
		}
	}, [bottles]);
	return (
		<div>
			Bottles:{bottles.length}
			<Cart cart={cart}></Cart>
			<div className='bottle-container '>
				{" "}
				{bottles.map((bottles) => (
					<SingleBottle
						bottles={bottles}
						handleAddToCart={handleAddToCart}
					></SingleBottle>
				))}
			</div>
		</div>
	);
};

export default WaterBootle;
