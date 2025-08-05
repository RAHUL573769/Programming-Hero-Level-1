import React from "react";
import SectionTitle from "../../Shared/SectionTitle";
import SingleMenuItems from "./SingleMenuItems";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
	// const [menu, setMenu] = useState([]);
	// useEffect(() => {
	// 	fetch("menu.json")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// setMenu(data);
	// 			console.log(data);

	// 			const popularItem = data.filter((item) => item.category === "popular");

	// 			setMenu(popularItem);
	// 		});
	// }, []);

	const [menu] = useMenu();
	const popularItem = menu.filter((x) => x.category === "popular");
	return (
		<div>
			<SectionTitle
				heading={"From Our Menu"}
				subHeading={"Popular Items"}
			></SectionTitle>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{popularItem.map((item) => (
					<SingleMenuItems item={item}></SingleMenuItems>
				))}
			</div>
		</div>
	);
};

export default PopularMenu;
