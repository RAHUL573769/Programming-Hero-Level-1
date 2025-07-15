import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
	const users = useLoaderData();
	console.log(users);
	return (
		<div>
			Users {users.length}
			<div className='overflow-x-auto'>
				<table className='table'>
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Created At</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{users.map((user) => (
							<>
								<tr key={user._id}>
									<th>1</th>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.createdAt}</td>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
