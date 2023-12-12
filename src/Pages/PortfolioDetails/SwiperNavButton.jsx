import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNavButton = () => {
	const swiper = useSwiper();
	return (
		<div className='flex justify-center w-full py-10 gap-x-3'>
			<button
				onClick={() => swiper.slidePrev()}
				className='flex items-center justify-center w-10 h-10 border rounded-full border-secondary  active:scale-[0.9] duration-150'
			>
				<i className='bi bi-arrow-left'></i>
			</button>
			<button
				onClick={() => swiper.slideNext()}
				className='flex items-center justify-center w-10 h-10 border rounded-full border-secondary active:scale-[0.9] duration-150'
			>
				<i className='bi bi-arrow-right'></i>
			</button>
		</div>
	);
};

export default SwiperNavButton;
