import React from 'react';
import HeroSection from '../../Components/HeroSection';
import hero from '../../img/about-hero.png';

const AboutPage = () => {
	return (
		<div>
			<HeroSection img={hero} text='About Us' />
		</div>
	);
};

export default AboutPage;
