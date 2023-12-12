import React from 'react';

const OverviewSection = ({ portfolio }) => {
	return (
		<div className='py-16 bg-base-100'>
			<div className='container grid px-5 lg:grid-cols-2 lg:px-0 gap-y-10'>
				<img
					src={portfolio?.images?.overview}
					className='w-fit h-fit rounded-3xl'
					alt=''
				/>
				<div className='flex flex-col self-center'>
					<p className='text-2xl font-bold lg:text-3xl'>Project Details</p>
					<div className='flex flex-col flex-wrap mt-10 gap-y-5'>
						<div className='flex items-center text-lg lg:text-xl gap-x-1'>
							<p className='font-bold '>Category:</p>
							<p className='capitalize'>{portfolio.details?.cat}</p>
						</div>
						<div className='flex flex-wrap items-center text-lg lg:text-xl gap-x-1'>
							<p className='font-bold '>Tags:</p>
							<p className='capitalize'>{portfolio.details?.tags}</p>
						</div>
						<div className='flex flex-wrap items-center text-lg lg:text-xl gap-x-1'>
							<p className='font-bold '>Technologies:</p>
							<p className='capitalize'>{portfolio.details?.technologies}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverviewSection;
