import React from 'react';

const HeaderText = ({ header, text }) => {
	return (
		<div className='flex flex-col items-center text-center gap-y-3'>
			<p className='font-bold tracking-widest uppercase text-secondary'>
				{header}
			</p>
			<p className='text-3xl font-bold capitalize lg:text-4xl text-header-color'>
				{text}
			</p>
		</div>
	);
};

export default HeaderText;
