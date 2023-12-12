import React from 'react';

const BenefitSection = ({ benefits, img }) => {
	return (
		<div className='container grid gap-10 px-5 py-16 lg:px-0 lg:grid-cols-2'>
			<div className='flex flex-col gap-y-7'>
				<p className='text-3xl font-bold'>Benefit Of Service </p>
				<ul className='flex flex-col gap-y-3'>
					{benefits.map((b, i) => {
						return (
							<li key={i} className='flex gap-x-3'>
								<i className='bi bi-arrow-right'></i>
								<p>{b}</p>
							</li>
						);
					})}
				</ul>
			</div>
			<img src={img} className='rounded-xl' alt='' />
		</div>
	);
};

export default BenefitSection;
