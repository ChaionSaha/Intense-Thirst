import React, { useState } from 'react';
import heroBg from '../../img/home-hero-bg.png';

const HomePageHero = () => {
	const [terms, setTerms] = useState([
		{
			text: 'Perfectly Responsive',
			icon: 'bi bi-rulers',
		},
		{
			text: 'Customize with ease',
			icon: 'bi bi-file-earmark-richtext',
		},
		{
			text: 'Friendly Support',
			icon: 'bi bi-people',
		},
	]);
	return (
		<div
			className='h-[80vh]'
			style={{
				background: `linear-gradient(0deg, rgba(0, 74, 119, 0.70) 0%, rgba(0, 74, 119, 0.70) 100%), url(${heroBg})`,
				backgroundPositionY: '50%',
			}}
		>
			<div className='container relative flex flex-col items-center justify-center w-full h-full '>
				<div className='text-6xl font-bold text-white w-[50%] text-center'>
					Quench your <span className='text-secondary'>Thirst</span> for
					excellence with us
				</div>
				<div className='text-center w-[40%] text-white mt-5'>
					Crafting digital success through exceptional web design and
					development services.
				</div>
				<button className='mt-10 btn-gradient'>Read More</button>
				<div
					className='absolute bottom-0 grid gap-10 translate-y-[50%] w-full grid-cols-3 px-16 py-5 justify-self-end rounded-xl'
					style={{
						background: 'linear-gradient(180deg, #0C4760 0%, #006590 100%)',
					}}
				>
					{terms &&
						terms.map((t, i) => {
							return (
								<div
									key={i}
									className='flex relative z-[100] items-center p-5 text-center text-white rounded-2xl gap-x-5 '
									style={{
										background:
											'linear-gradient(270deg, rgba(255, 255, 255, 0.10) 57.6%, rgba(255, 255, 255, 0.00) 91.06%)',
									}}
								>
									<p className='p-2 px-3 text-xl rounded-full bg-secondary'>
										<i className={t.icon}></i>
									</p>
									<p className='text-xl font-bold'>{t.text}</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default HomePageHero;
