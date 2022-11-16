import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SearchForm from '../../Components/SearchForm';
import TaskCard from '../../Components/TaskCard';
import './style.css';
import SorthingCheckboxes from './Components/SorthingCheckboxes/index';

const OrdersPage: React.FC = () => {
	return (
		<Box className='tasksPage'>
			<Box className='formContainer'>
				<SearchForm />
			</Box>
			<Box sx={{ display: 'flex' }}>
				<SorthingCheckboxes />
				<Box sx={{ pt: 5, pl: '100px' }}>
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
				</Box>
			</Box>
		</Box>
	);
};
export default OrdersPage;
