import React from 'react';
import CustomTitle from '../../Components/CustomeTitle';
import HeroSection from '../../Components/HeroSection';
import hero from '../../img/portfolio-hero.png';
import PortfolioList from './PortfolioList';

const Portfolio = () => {
	return (
		<div>
			<CustomTitle title='Portfolio' />
			<HeroSection img={hero} text='Portfolio' />
			<PortfolioList />
		</div>
	);
};

export default Portfolio;
