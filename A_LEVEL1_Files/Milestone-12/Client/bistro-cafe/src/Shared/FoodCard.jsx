import { AuthContext } from "../providers/AuthContext";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
	// const { user } = useContext(AuthContext);
	const { user } = useAuth();

	const navigate = useNavigate();

	const location = useLocation();
	const [refetch] = useCart();
	const axiosSecure = useAxiosSecure();
	const handleAddToCart = () => {
		// console.log(food, user);

		if (user && user.email) {
			//send item to database
			console.log(item);

			const cartItem = {
				menuId: item._id,
				email: user.email,
				name: item.name,
				price: item.price,
			};
			axiosSecure.post("http://localhost:5000/carts", cartItem).then((res) => {
				console.log(res.data);
				if (res.data.insertedId) {
					alert("Item aDDED");
					//re-fetch cart

					refetch();
				}
			});
		} else {
			alert("Please Login to Add to CART");
			navigate("/login", { state: { from: location } });
		}
	};
	// const handleAddToCart = (food) => {
	// 	console.log(food, user);

	// 	if (user && user.email) {
	// 		//send item to database
	// 		console.log(item);

	// 		const cartItem = {
	// 			menuId: item._id,
	// 			email: user.email,
	// 			name: item.name,
	// 			price: item.price,
	// 		};
	// 		axiosSecure.post("http://localhost:5000/carts", cartItem).then((res) => {
	// 			console.log(res.data);
	// 			if (res.data.insertedId) {
	// 				alert("Item aDDED");
	// 			}
	// 		});
	// 	} else {
	// 		alert("Please Login to Add to CART");
	// 		navigate("/login", { state: { from: location } });
	// 	}
	// };
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
						<button
							onClick={handleAddToCart}
							className='btn btn-primary border-0 border-b-4 mt-4'
						>
							Add to Cart
						</button>
						{/* <button
							onClick={() => handleAddToCart(item)}
							className='btn btn-primary border-0 border-b-4 mt-4'
						>
							Add to Cart
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
