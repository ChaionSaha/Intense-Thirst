import React from 'react';

const HeroSection = ({ img, text }) => {
	return (
		<div
			className='lg:h-[30vh] h-[20vh]'
			style={{
				background: `linear-gradient(0deg, rgba(0, 74, 119, 0.87) 0%, rgba(0, 74, 119, 0.87) 100%), url(${img})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<div className='container flex items-center justify-center w-full h-full text-4xl font-bold text-white lg:text-5xl'>
				{text}
			</div>
		</div>
	);
};

export default HeroSection;
