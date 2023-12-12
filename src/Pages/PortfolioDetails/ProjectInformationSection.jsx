import React from 'react';

const ProjectInformationSection = ({ info }) => {
	return (
		<div className='container flex flex-col px-5 my-16 lg:px-0 gap-y-5'>
			<p className='text-3xl font-bold'>Project Information</p>
			<p>{info}</p>
		</div>
	);
};

export default ProjectInformationSection;
