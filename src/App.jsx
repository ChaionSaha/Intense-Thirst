import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomTitle from './Components/CustomeTitle';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactUs from './Pages/ContactUsPage/ContactUs';
import HomePage from './Pages/HomePage/HomePage';
import PortfolioDetails from './Pages/PortfolioDetails/PortfolioDetails';
import Portfolio from './Pages/PortfolioPage/Portfolio';

function App() {
	return (
		<>
			<Header />
			<CustomTitle title='Home' />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/portfolio' element={<Portfolio />}>
					<Route path='/portfolio/:id' element={<PortfolioDetails />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
