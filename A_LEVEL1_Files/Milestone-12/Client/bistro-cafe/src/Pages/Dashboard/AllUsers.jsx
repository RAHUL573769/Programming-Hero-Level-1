import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
	const axiosSecure = useAxiosSecure();
	const { data: users = [] } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const result = await axiosSecure.get("/users");
			return result.data;
		},
	});
	return (
		<>
			<div className='flex justify-evenly my-4 '>
				<h2 className='text-3xl'>All Users</h2>
				<h2 className='text-3xl'>Total Users:{users.length}</h2>
			</div>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}

					<tbody>
						{/* row 1 */}
						{users.map((user, index) => (
							<>
								<table className='table'>
									{/* head */}
									<thead>
										<tr>
											<th></th>
											<th>Name</th>
											<th>Email</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th>{index + 1}</th>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>Red</td>
										</tr>
									</tbody>
								</table>
							</>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default AllUsers;
