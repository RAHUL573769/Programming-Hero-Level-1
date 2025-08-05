import image from "../../../assets/menu/banner3.jpg";
import MenuHero from "../HeroSection/MenuHero";
import MenuCategories from "../MenuCategories/MenuCategories";

const Menu = () => {
	return (
		<div>
			<MenuHero image={image}></MenuHero>
			<MenuCategories></MenuCategories>
		</div>
	);
};

export default Menu;
