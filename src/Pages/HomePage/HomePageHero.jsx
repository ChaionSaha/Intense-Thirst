import React from 'react';
import heroBg from '../../img/home-hero-bg.png';

const HomePageHero = ({ handleClick }) => {
	return (
		<div
			className='lg:h-[80vh] h-[100vh]'
			style={{
				background: `linear-gradient(0deg, rgba(0, 74, 119, 0.70) 0%, rgba(0, 74, 119, 0.70) 100%), url(${heroBg})`,
				backgroundPositionY: '50%',
			}}
		>
			<div className='container relative flex flex-col items-center justify-center w-full h-full '>
				<div className='text-5xl lg:text-6xl font-bold text-white px-5 lg:px-0 lg:w-[50%] text-center'>
					Quench your <span className='text-secondary'>Thirst</span> for
					excellence with us
				</div>
				<div className='text-center text-lg lg:text-xl px-5 lg:px-0 lg:w-[40%] text-white mt-5'>
					Crafting digital success through exceptional web design and
					development services.
				</div>
				<button onClick={handleClick} className='mt-10 text-lg btn-gradient'>
					Read More
				</button>
			</div>
		</div>
	);
};

export default HomePageHero;
