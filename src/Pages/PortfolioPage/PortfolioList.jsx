import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderText from '../../Components/HeaderText';

const PortfolioList = () => {
	const [portfolio, setPortfolio] = useState([]);
	useEffect(() => {
		const run = async () => {
			const { data } = await axios('/portfolio.json');
			setPortfolio(data);
		};
		run().catch((err) => toast.error(err.message));
	}, []);
	const navigate = useNavigate();
	return (
		<div className='container flex flex-col items-center justify-center min-h-screen px-5 my-10 lg:px-0'>
			{<HeaderText header='Our portfolio' text='Showcasing our excellence' />}
			<div className='grid mt-20 gap-x-16 gap-y-10 lg:grid-cols-3'>
				{portfolio.map((p, i) => {
					return (
						<div
							key={i}
							className='flex flex-col p-5 duration-150 gap-y-5 bg-base-100 rounded-xl hover:shadow-card'
						>
							<img src={p.images.cover} className='m-3 w-fit' alt='' />
							<p className='text-2xl font-bold text-primary'>{p.name}</p>
							<p className=' text-base-400'>{p.shortDes}</p>
							<p className='flex items-center gap-x-3'>
								<span className='w-3 h-3 rounded-full bg-secondary'></span>
								<span className='text-xl font-bold capitalize text-primary'>
									{p.projectCat}
								</span>
							</p>
							<button
								onClick={(e) => {
									e.preventDefault();
									navigate(`/portfolio/${p.id}`);
								}}
								className='flex items-center font-medium duration-150 gap-x-3 text-secondary hover:underline'
							>
								<i className='bi bi-arrow-right'></i>
								View More
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PortfolioList;
