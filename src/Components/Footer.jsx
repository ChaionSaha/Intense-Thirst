import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

const Footer = () => {
	return (
		<div className='text-white bg-primary'>
			<div className='container grid px-5 pt-20 pb-10 border-b gap-y-10 gap-x-20 lg:px-0 lg:grid-cols-4'>
				<div className='flex flex-col gap-y-3'>
					<img src={logo} alt='' className='w-fit' />
					<p className='text-white'>
						Exceptional Web Design And Development Services. Let us quench your
						thirst for digital success.
					</p>
					<div className='flex text-primary gap-x-3'>
						<p className='p-2 px-3 bg-white rounded-full'>
							<i className='bi bi-facebook'></i>
						</p>
						<p className='p-2 px-3 bg-white rounded-full'>
							<i className='bi bi-linkedin'></i>
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='text-xl font-bold tracking-widest uppercase'>menu</p>
					<ul className='flex flex-col mt-5 gap-y-2'>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li>
							<NavLink to='/about'>About Us</NavLink>
						</li>
						<li>
							<NavLink to='/portfolio'>Our Work</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Contact Us</NavLink>
						</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<p className='text-xl font-bold tracking-widest uppercase'>
						our services
					</p>
					<ul className='flex flex-col mt-5 gap-y-2'>
						<li>Ui/Ux Design</li>
						<li>Web Development</li>
						<li>More</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<p className='text-xl font-bold tracking-widest uppercase'>
						stay in touch
					</p>
					<ul className='flex flex-col mt-5 gap-y-2'>
						<li className='flex items-center gap-x-5'>
							<i className='bi bi-telephone-fill'></i>
							<p>+88 01603 797197</p>
						</li>
						<li className='flex items-center gap-x-5'>
							<i className='bi bi-envelope-fill'></i>
							<p>intensethirst03@gmail.com</p>
						</li>
						<li className='flex items-center gap-x-5'>
							<i className='bi bi-geo-alt-fill'></i>
							<p>Dhaka, Bangladesh</p>
						</li>
					</ul>
				</div>
			</div>
			<div className='container text-lg text-center py-7'>
				© Copyrights <span className='text-[#007DB2]'>Intense</span>{' '}
				<span className='text-secondary'>Thirst</span>. All Rights Reserved
			</div>
		</div>
	);
};

export default Footer;
