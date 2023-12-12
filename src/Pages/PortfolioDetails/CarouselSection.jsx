import React from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavButton from './SwiperNavButton';

const CarouselSection = ({ images }) => {
	return (
		<div className='container px-5 py-16 lg:px-0'>
			<Swiper slidesPerView={1}>
				{images.map((im, i) => {
					return (
						<SwiperSlide key={i} className='flex justify-center w-fit'>
							<img src={im} className='w-fit' alt='' />
						</SwiperSlide>
					);
				})}
				<SwiperNavButton />
			</Swiper>
		</div>
	);
};

export default CarouselSection;
