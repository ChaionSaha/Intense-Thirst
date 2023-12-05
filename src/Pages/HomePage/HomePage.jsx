import React, { useRef } from 'react';

import TimelineSection from '../../Components/TimelineSection';
import BenefitsSection from './BenefitsSection';
import BuildSomethingSection from './BuildSomethingSection';
import HomePageHero from './HomePageHero';
import OurServicesSection from './OurServicesSection';
import ServicesSection from './ServicesSection';

const HomePage = () => {
	const ref = useRef(null);
	const handleClick = (e) => {
		e.preventDefault();
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div>
			<HomePageHero handleClick={handleClick} />
			<div ref={ref}>{<BenefitsSection />}</div>
			<ServicesSection />
			<BuildSomethingSection />
			<OurServicesSection />
			<TimelineSection />
		</div>
	);
};

export default HomePage;
