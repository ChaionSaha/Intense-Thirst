import React, { useState } from 'react';
import HeaderText from '../../Components/HeaderText';
import monitorGear from '../../img/monitor-gear.png';
import monitor from '../../img/monitor.png';
import wordpress from '../../img/wordpress.png';

const ServicesSection = () => {
	const [services] = useState([
		{
			icon: monitor,
			title: 'ui & ux design',
			description:
				'Designing seamless experiences. Elevate your brand with our UI/UX expertise. Transforming ideas into user delight.',
		},
		{
			icon: monitorGear,
			title: 'website development',
			description:
				'Empower your brand online. Tailored website development for a powerful digital presence. Contact us today!',
		},
		{
			icon: wordpress,
			title: 'wordpress development',
			description:
				"Unlock your website's potential with expert WordPress development. Custom solutions for a standout online presence.",
		},
	]);
	return (
		<div className='container flex flex-col items-center px-5 mt-20 lg:mt-10 lg:px-0'>
			{<HeaderText header='Our Services' text='for your good business' />}
			<div className='grid px-5 mt-16 lg:px-0 lg:grid-cols-3 gap-x-16 gap-y-5'>
				{services.map((s, i) => {
					return (
						<div
							key={i}
							className='flex flex-col p-10 bg-base-100 gap-y-5 rounded-xl shadow-card'
						>
							<img src={s.icon} alt='' className='w-fit ' />
							<p className='text-xl mt-3 font-bold uppercase font-[Poppins] text-base-300'>
								{s.title}
							</p>
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
