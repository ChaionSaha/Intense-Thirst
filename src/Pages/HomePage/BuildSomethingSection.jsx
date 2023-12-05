import React from 'react';
import bg from '../../img/build-together-bg.png';

const BuildSomethingSection = () => {
	return (
		<div className='h-[50vh] mt-20' style={{ background: `url(${bg})` }}>
			<div className='container flex flex-col items-center justify-center h-full px-5 text-center lg:px-0'>
				<p className='flex-col text-3xl font-bold lg:flex lg:text-5xl'>
					Let's Build Something Great{' '}
					<span className='text-3xl font-bold lg:text-5xl text-secondary'>
						Together
					</span>
				</p>
				<div className='lg:w-[40%] text-center mt-10'>
					We help teams create great digital products by providing them with
					tools and technology to make the design-to-code process universally
					accessible.
				</div>
				<button className='mt-10 btn-gradient'>Explore Now</button>
			</div>
		</div>
	);
};

export default BuildSomethingSection;
