import Cover from "../../../Shared/Cover";

const MenuHero = ({ image }) => {
	return (
		<div>
			{" "}
			{/* <h2 className='text-shadow-white'>Main Menu</h2> */}
			<Cover title={"Main Cover"} image={image}></Cover>
		</div>
	);
};

export default MenuHero;
