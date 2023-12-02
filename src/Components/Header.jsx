import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import CustomNav from './CustomNav';

const Header = () => {
	return (
		<div className='bg-base-100'>
			<div className='container py-3 navbar '>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-5 h-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</div>
						<ul className=' gap-y-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
							<li>
								<CustomNav to='/'>Home</CustomNav>
							</li>
							<li>
								<CustomNav to='/about'>About Us</CustomNav>
							</li>
							<li>
								<CustomNav to='/portfolio'>Portfolio</CustomNav>
							</li>
						</ul>
					</div>
					<NavLink to='/' className='text-xl btn btn-ghost'>
						<img src={logo} alt='' />
					</NavLink>
				</div>
				<div className='hidden navbar-center lg:flex'>
					<ul className='flex px-1 menu-horizontal gap-x-10'>
						<li>
							<CustomNav to='/'>Home</CustomNav>
						</li>
						<li>
							<CustomNav to='/about'>About Us</CustomNav>
						</li>
						<li>
							<CustomNav to='/portfolio'>Portfolio</CustomNav>
						</li>
					</ul>
				</div>
				<div className='navbar-end'>
					<NavLink to='/contact' className='btn-gradient'>
						Contact Us
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;
