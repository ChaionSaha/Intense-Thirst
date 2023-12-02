import React from 'react';
import BenefitsSection from './BenefitsSection';
import HomePageHero from './HomePageHero';
import ServicesSection from './ServicesSection';

const HomePage = () => {
	return (
		<div>
			<HomePageHero />
			<BenefitsSection />
			<ServicesSection />
		</div>
	);
};

export default HomePage;
