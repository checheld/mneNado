import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../NavBar/Index';
import Footer from '../Footer/Index';
import './style.sass';

interface ILayout {
	children: React.ReactElement;
	className?: string;
	// for image copywrite
	dataAttr?: string;
}

const Layout: React.FC<ILayout> = ({ children, dataAttr, className }) => {
	return (
		<Box className={`layout ${className}`} aria-label={dataAttr}>
			<NavBar />
			{children}
			<Footer />
		</Box>
	);
};

export default Layout;
