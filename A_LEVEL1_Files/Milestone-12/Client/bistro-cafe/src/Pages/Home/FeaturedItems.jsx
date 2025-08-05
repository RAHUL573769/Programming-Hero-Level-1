import React from "react";
import SectionTitle from "../../Shared/SectionTitle";
import "./FearuresItem.css";
import featuredImage from "../../assets/home/featured.jpg";
const FeaturedItems = () => {
	return (
		<div className='featured-item text-white my-8 pt-4'>
			<SectionTitle
				heading={"Featured Items"}
				subHeading={"Popular Items"}
			></SectionTitle>

			<div className='border border-amber-900  md:flex justify-center items-center pb-20 pt-4 px-16 py-2'>
				<div>
					<img src={featuredImage}></img>
				</div>
				<div className='md:ml-10'>
					<p>August 20,2029</p>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
						Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
						aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
						imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
						mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
						semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
						porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
						ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
						nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
						Etiam ultricies nisi
					</p>
					<button className='btn btn-primary'>Order </button>
				</div>
			</div>
		</div>
	);
};

export default FeaturedItems;
