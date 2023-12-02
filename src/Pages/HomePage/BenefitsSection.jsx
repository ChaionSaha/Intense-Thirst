import React, { useState } from 'react';

const BenefitsSection = () => {
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
		<div className='container px-5 lg:px-0'>
			<div
				className=' grid gap-10 mt-10 lg:mt-0 lg:translate-y-[-50%] w-full lg:grid-cols-3 px-5 lg:px-16 py-5 justify-self-end rounded-xl'
				style={{
					background: 'linear-gradient(180deg, #0C4760 0%, #006590 100%)',
				}}
			>
				{terms &&
					terms.map((t, i) => {
						return (
							<div
								key={i}
								className='flex relative z-[100] items-center p-5 text-center text-white rounded-2xl gap-x-5 lg:w-full'
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
	);
};

export default BenefitsSection;
