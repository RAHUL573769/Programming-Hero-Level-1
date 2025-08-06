import useCart from "../../hooks/useCart";

const Cart = () => {
	const [cart] = useCart();

	const totalPrice = cart.reduce((total, item) => total + item.price, 0);
	console.log(cart);
	return (
		<div>
			<div className='flex justify-evenly'>
				{" "}
				<h2 className='text-6xl'>My Cart{cart.length}</h2>
				<h2 className='text-6xl'>Price {totalPrice}</h2>
				<button className='btn btn-primary'>Pay</button>
			</div>

			<div className='overflow-x-auto'>
				<table className='table'>
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
									{item.price}
									<br />
								</td>
								<td>Purple</td>
								<th>
									<button className='btn btn-ghost btn-xs'>details</button>
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
