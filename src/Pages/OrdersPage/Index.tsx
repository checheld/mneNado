import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SearchForm from '../../Components/SearchForm';
import TaskCard from '../../Components/TaskCard';
import './style.css';

const OrdersPage: React.FC = () => {
	return (
		<Box className='tasksPage'>
			<Box className='formContainer'>
				<SearchForm />
			</Box>
			<Box sx={{ pt: 5 }}>
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
				<TaskCard />
			</Box>
		</Box>
	);
};
export default OrdersPage;
