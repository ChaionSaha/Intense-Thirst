import React from 'react';

import TimelineSection from '../../Components/TimelineSection';
import BenefitsSection from './BenefitsSection';
import BuildSomethingSection from './BuildSomethingSection';
import HomePageHero from './HomePageHero';
import OurServicesSection from './OurServicesSection';
import ServicesSection from './ServicesSection';

const HomePage = () => {
	return (
		<div>
			<HomePageHero />
			<BenefitsSection />
			<ServicesSection />
			<BuildSomethingSection />
			<OurServicesSection />
			<TimelineSection />
		</div>
	);
};

export default HomePage;
