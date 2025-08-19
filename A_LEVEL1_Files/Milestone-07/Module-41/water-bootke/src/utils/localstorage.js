const getStoredCart = () => {
	const storedCartString = localStorage.getItem("cart");

	if (storedCartString) {
		return JSON.parse(storedCartString);
	}
	return [];
};

const saveCart = (cart) => {
	const cartStrigified = JSON.stringify(cart);
	localStorage.setItem("cart", cartStrigified);
};
const addToLocalStorage = (id) => {
	const cart = getStoredCart();
	console.log("Done");
	cart.push(id);
	//save to local storage
	saveCart(cart);
};

export { addToLocalStorage, getStoredCart, saveCart };
