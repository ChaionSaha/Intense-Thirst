import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomTitle from '../../Components/CustomeTitle';
import HeroSection from '../../Components/HeroSection';
import hero from '../../img/portfolio-hero.png';
import BenefitSection from './BenefitSection';
import CarouselSection from './CarouselSection';
import OverviewSection from './OverviewSection';
import ProjectInformationSection from './ProjectInformationSection';

const PortfolioDetails = () => {
	const { id } = useParams();
	const [portfolio, setPortfolio] = useState({});
	useEffect(() => {
		const run = async () => {
			const { data } = await axios('/portfolio.json');
			setPortfolio(data.filter((d) => d.id === id)[0]);
		};
		run().catch((err) => toast.error(err.message));
	}, []);
	return (
		<div>
			{portfolio && (
				<>
					<CustomTitle title={portfolio.name} />
					<HeroSection img={hero} text={portfolio.name} />
					<OverviewSection portfolio={portfolio} />
					{portfolio.images?.carousel && (
						<CarouselSection images={portfolio.images?.carousel} />
					)}
					{portfolio.details && (
						<>
							<ProjectInformationSection
								info={portfolio.details?.information}
							/>
							<BenefitSection
								benefits={portfolio?.details?.benefits}
								img={portfolio?.images.benefit}
							/>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default PortfolioDetails;
