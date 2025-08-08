import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
	const axiosSecure = useAxiosSecure();
	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const result = await axiosSecure.get("/users", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access-token")}`,
				},
			});
			return result.data;
		},
	});
	console.log(users);

	const handleMakeAdmin = (user) => {
		console.log(user);
		axiosSecure.patch(`/users/admin/${user}`).then((res) => {
			console.log(res);

			if (res.data.modifiedCount > 0) {
				refetch();
				alert("Admin Made");
			}
		});
	};
	const handleDelete = (_id) => {
		console.log(_id);
		axiosSecure.delete(`/users/${_id}`).then((res) => {
			// console.log(res.data.deletedCount);
			if (res.data.deletedCount > 0) {
				refetch();
			}
		});
	};
	return (
		<>
			<div className='flex justify-evenly my-4 '>
				<h2 className='text-3xl'>All Users</h2>
				<h2 className='text-3xl'>Total Users:{users.length}</h2>
			</div>
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}

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
										<th>Make Admin</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>{index + 1}</th>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>
											{user.role === "admin" ? (
												"Admin"
											) : (
												<button onClick={() => handleMakeAdmin(user._id)}>
													Make ADMIN
												</button>
											)}
										</td>
										<td>
											<button onClick={() => handleDelete(user._id)}>
												Delete
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</>
					))}
				</table>
			</div>
		</>
	);
};

export default AllUsers;
