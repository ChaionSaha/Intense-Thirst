import React, { useState } from 'react';
import img1 from '../../img/about-1.png';

const AboutDetailsSection = () => {
	const [points] = useState([
		'Innovation at Core',
		'Transformative Experiences',
		'Comprehensive Support',
		'Unparalleled Expertise',
		'Bespoke Solutions',
		'Commitment to Excellence',
	]);
	return (
		<div className='container grid px-5 mt-16 lg:px-0 lg:grid-cols-2 gap-y-10 gap-x-20'>
			<div className='flex flex-col'>
				<p className='font-semibold tracking-widest uppercase text-secondary'>
					About Us
				</p>
				<p className='text-3xl font-bold capitalize lg:text-5xl'>
					Best Care for your good business
				</p>

				<div className='grid gap-3 mt-10 lg:grid-cols-2'>
					{points.map((p, i) => {
						return (
							<div key={i} className='flex items-center gap-x-2'>
								<p className='w-2 h-2 rounded-full bg-secondary'></p>
								<p className='text-lg'>{p}</p>
							</div>
						);
					})}
				</div>
				<p className='mt-10'>
					Empowering businesses through tailored IT services. Our dedicated team
					delivers innovative solutions, reliable support, and transformative
					technology experiences. Elevate your success with our expertise and
					commitment to excellence
				</p>
				<p className='mt-10'>
					As an IT service company, we specialize in crafting bespoke solutions
					to propel your business forward. Our seasoned experts provide
					comprehensive support, ensuring seamless technology integration and
					empowering your success through innovation. Partner with us for
					unparalleled expertise and unwavering commitment.
				</p>
			</div>
			<img src={img1} className='w-fit h-fit shadow-card' alt='' />
		</div>
	);
};

export default AboutDetailsSection;
