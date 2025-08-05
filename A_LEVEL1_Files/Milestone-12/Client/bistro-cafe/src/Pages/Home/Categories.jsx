import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";

import slide3 from "../../assets/home/slide3.jpg";

import slide4 from "../../assets/home/slide4.jpg";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../Shared/SectionTitle";
const Categories = () => {
	return (
		<div>
			{" "}
			<SectionTitle
				heading={"Order Online"}
				subHeading={"From 11am to 2pm"}
			></SectionTitle>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className='mySwiper'
			>
				<SwiperSlide>
					<img src={slide1} />
					<h3 className='text-4xl uppercase text-center -mt-16 '>Pizzas</h3>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<img src={slide2} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide4} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Categories;
