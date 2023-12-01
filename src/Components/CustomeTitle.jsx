import React from 'react';
import { Helmet } from 'react-helmet-async';

const CustomTitle = ({ title }) => {
	return (
		<Helmet>
			<title>{`${title} - Intense Thirst`}</title>
		</Helmet>
	);
};

export default CustomTitle;
