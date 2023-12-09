import React from 'react';
import CustomTitle from '../../Components/CustomeTitle';
import HeroSection from '../../Components/HeroSection';
import hero from '../../img/contact-us-hero.png';
import ContactDetails from './ContactDetails';

const ContactUs = () => {
	return (
		<div>
			<CustomTitle title='Contact Us' />
			<HeroSection img={hero} text='Contact Us' />
			<ContactDetails />
		</div>
	);
};

export default ContactUs;
