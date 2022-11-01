import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../NavBar/Index';
<<<<<<< HEAD
=======
import Footer from '../Footer/Index';
>>>>>>> main
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
			<Footer />
			{children}
		</Box>
	);
};

export default Layout;
