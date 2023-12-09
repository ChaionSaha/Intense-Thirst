import { useState } from 'react';
import HeaderText from '../../Components/HeaderText';
import customize from '../../img/customize-with-ease.png';
import support from '../../img/friendly-support.png';
import responsive from '../../img/perfectly-responsive.png';

const AboutPageServiceSection = () => {
	const [services] = useState([
		{
			img: responsive,
			title: 'Perfectly Responsive',
			description:
				'Responsive design for flawless user experience on any device. Elevate your digital presence with our expertise.',
		},
		{
			img: customize,
			title: 'Customize with ease',
			description:
				'Easily tailor and personalize with simplicity. Unlock limitless customization possibilities for a seamless and unique experience.',
		},
		{
			img: support,
			title: 'Friendly Support',
			description:
				'Always here for you. Our friendly support team ensures a smooth experience and quick issue resolution.',
		},
	]);
	return (
		<div className='container flex flex-col px-5 mt-36 lg:px-0'>
			<HeaderText
				header='our services'
				text='Excellence in every provided service'
			/>
			<div className='grid mt-20 lg:grid-cols-3 gap-y-5 gap-x-20'>
				{services.map((s, i) => {
					return (
						<div
							key={i}
							className='flex flex-col p-10 rounded-lg lg:rounded-bl-[50px] rounded- bg-base-100 shadow-card'
						>
							<img src={s.img} className='w-fit' alt='' />
							<p className='uppercase text-xl text-base-300 mt-5 font-bold font-[poppins]'>
								{s.title}
							</p>
							<p className='mt-5 text-lg font-semibold'>{s.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AboutPageServiceSection;
