import { FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className='flex'>
			{/* dashboard side bar */}
			<div className='w-64 min-h-screen '>
				<ul className='menu p-4'>
					<ul className='menu bg-base-200 text-base-content min-h-full w-80 p-4'>
						{/* Sidebar content here */}

						<li>
							<NavLink to='/dashboard/userHome'>
								<FaHome></FaHome>
								User Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/dashboard/cart'>
								<FaShoppingCart></FaShoppingCart>
								My Cart
							</NavLink>
						</li>
						<li>
							<NavLink to='/dashboard/reservation'>
								<FaCalendar></FaCalendar>
								My Reservations
							</NavLink>
						</li>
						<li>
							<NavLink to='/dashboard/reservation'>
								<FaCalendar></FaCalendar>
								My Reviews
							</NavLink>
						</li>
						<div className='divider'></div>

						<li>
							<NavLink to='/'>
								<FaHome></FaHome>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/order/menu'>
								<FaSearch></FaSearch>
								Menu
							</NavLink>
						</li>
					</ul>
				</ul>
			</div>
			<div className='flex-1 p-8'>
				{/* dashboard content */}
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default Dashboard;
