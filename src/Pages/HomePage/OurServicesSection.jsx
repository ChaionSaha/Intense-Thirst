import React, { useState } from 'react';
import HeaderText from '../../Components/HeaderText';
import corporate from '../../img/corporate.png';
import ecom from '../../img/ecom-retail.png';
import education from '../../img/education.png';
import health from '../../img/health.png';
import manu from '../../img/manufac.png';
import realEstate from '../../img/real-estate.png';

const OurServicesSection = () => {
	const [services] = useState([
		{
			img: ecom,
			header: 'E-commerce & Retail',
			details:
				'Revolutionize online shopping. Tailored e-commerce solutions for retail success. Elevate your brand experience now.',
		},
		{
			img: manu,
			header: 'Manufacturing & Supply ',
			details:
				'Optimize operations, and enhance the supply chain. Tailored solutions for manufacturing success. Elevate your industry standards with us.',
		},
		{
			img: realEstate,
			header: 'Real Estate & Property ',
			details:
				'Transforming properties into opportunities. Tailored solutions for real estate success. Elevate your listings with us',
		},
		{
			img: education,
			header: 'Education & E-learning',
			details:
				'Empowering education digitally. Tailored e-learning solutions for success. Elevate your online learning experience with us.',
		},
		{
			img: health,
			header: 'Healthcare & Fitness',
			details:
				'Transforming healthcare digitally. Tailored solutions for wellness success. Elevate your health and fitness experience with us.',
		},
		{
			img: corporate,
			header: 'Corporate & Business',
			details:
				'Elevate corporate success. Tailored solutions for business growth. Transforming ideas into impactful digital strategies with us.',
		},
	]);
	return (
		<div className='container flex flex-col items-center px-5 mt-20 lg:mt-40 lg:px-0'>
			{
				<HeaderText
					header='Our Services'
					text='services that exceeds expectations always'
				/>
			}
			<div className='grid px-5 mt-16 lg:mt-36 lg:px-0 lg:grid-cols-3 gap-x-40 gap-y-16 lg:gap-y-40'>
				{services.map((s, i) => {
					return (
						<div
							key={i}
							className='flex flex-col bg-base-100 rounded-xl shadow-card'
						>
							<img src={s.img} alt='' className='w-full rounded-xl' />
							<div className='p-5'>
								<p className='text-xl font-bold'>{s.header}</p>
								<p className='mt-5 text-base-300'>{s.details}</p>
								<p className='mt-3 text-lg font-bold cursor-pointer text-secondary hover:underline'>
									Read More
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OurServicesSection;
