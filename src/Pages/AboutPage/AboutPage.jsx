import CustomTitle from '../../Components/CustomeTitle';
import HeroSection from '../../Components/HeroSection';
import TimelineSection from '../../Components/TimelineSection';
import hero from '../../img/about-hero.png';
import AboutDetailsSection from './AboutDetailsSection';
import AboutPageServiceSection from './AboutPageServiceSection';

const AboutPage = () => {
	return (
		<div>
			<CustomTitle title='About Us' />
			<HeroSection img={hero} text='About Us' />
			<AboutDetailsSection />
			<AboutPageServiceSection />

			<TimelineSection
				header='our workflow'
				text='Agile, adaptive, client-centric workflow'
			/>
		</div>
	);
};

export default AboutPage;
