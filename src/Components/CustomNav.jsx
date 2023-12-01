import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNav = ({ to, children }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`uppercase  font-semibold ${
					isActive ? 'text-secondary' : 'text-[#313131]'
				}`
			}
		>
			{children}
		</NavLink>
	);
};

export default CustomNav;
