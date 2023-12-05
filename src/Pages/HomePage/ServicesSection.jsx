import React, { useState } from 'react';
import HeaderText from '../../Components/HeaderText';

const ServicesSection = () => {
	const [services] = useState([
		{
			icon: 'img/monitor.png',
			description:
				'Designing seamless experiences. Elevate your brand with our UI/UX expertise. Transforming ideas into user delight.',
		},
		{
			icon: 'img/monitor-gear.png',
			description:
				'Empower your brand online. Tailored website development for a powerful digital presence. Contact us today!',
		},
		{
			icon: 'img/wordpress.png',
			description:
				"Unlock your website's potential with expert WordPress development. Custom solutions for a standout online presence.",
		},
	]);
	return (
		<div className='container flex flex-col items-center px-5 mt-20 lg:mt-10 lg:px-0'>
			{<HeaderText header='Our Services' text='For Your Good Business' />}
			<div className='grid px-5 mt-16 lg:px-0 lg:grid-cols-3 gap-x-16 gap-y-5'>
				{services.map((s, i) => {
					return (
						<div
							key={i}
							className='flex flex-col bg-base-100 p-10 gap-y-10 rounded-xl shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)]'
						>
							<img src={s.icon} alt='' className='w-fit ' />
							<div className='border border-secondary w-[40%]'></div>
							<p>{s.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ServicesSection;
