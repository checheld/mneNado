import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SearchForm from '../../Components/SearchForm';
import TaskCard from '../../Components/TaskCard';
import './style.css';

const OrdersPage: React.FC = () => {
	return (
		<>
			<Box className='formContainer' sx={{ pt: 5 }}>
				<SearchForm />
			</Box>
			<Box sx={{ pt: 5 }}>
				<TaskCard />
				<TaskCard />
				<TaskCard />
			</Box>
		</>
	);
};
export default OrdersPage;
