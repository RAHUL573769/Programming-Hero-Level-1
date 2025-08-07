import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
	const [cart, refetch] = useCart();

	const totalPrice = cart.reduce((total, item) => total + item.price, 0);

	const axiosSecure = useAxiosSecure();
	// console.log(axiosSecure);
	const handleDelete = (_id) => {
		// console.log(id);
		axiosSecure
			.delete(`/carts/${_id}`)
			.then((res) => {
				if (res.data.deletedCount > 0) {
					refetch();
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<div className='flex justify-evenly'>
				{" "}
				<h2 className='text-6xl'>My Cart{cart.length}</h2>
				<h2 className='text-6xl'>Price {totalPrice}</h2>
				<button className='btn btn-primary'>Pay</button>
			</div>

			<div className='overflow-x-auto '>
				<table className='table w-full'>
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<th>#</th>
							<th>Image</th>
							<th>Name</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{cart.map((item) => (
							<tr key={item._id}>
								<th>
									<label>
										<input type='checkbox' className='checkbox' />
									</label>
								</th>
								<td>
									<div className='flex items-center gap-3'>
										<div className='avatar'>
											<div className='mask mask-squircle h-12 w-12'>
												<img
													src={item.image}
													alt='Avatar Tailwind CSS Component'
												/>
											</div>
										</div>
										<div>
											<div className='font-bold'>{item.name}</div>
											<div className='text-sm opacity-50'>United States</div>
										</div>
									</div>
								</td>
								<td>
									${item.price}
									<br />
								</td>
								<td>Purple</td>
								<th>
									<button
										onClick={() => handleDelete(item._id)}
										className='btn btn-ghost btn-xs'
									>
										<FaTrashAlt className='text-red-700' />
									</button>
								</th>
							</tr>
						))}
					</tbody>
					{/* foot */}
				</table>
			</div>
		</div>
	);
};

export default Cart;
