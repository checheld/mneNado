import React from 'react';
import { Box } from '@mui/material';
import TaskCard from '../../Components/TaskCard';
import './style.css';
import SorthingCheckboxes from './Components/SorthingCheckboxes/index';
import SearchForm from '../../Components/SearchForm';

const OrdersPage: React.FC = () => {
	return (
		<Box className='tasksPage'>
			<Box className='formContainer'>
				<SearchForm />
			</Box>
			<Box className='contentContainer'>
				<SorthingCheckboxes />
				<Box className='tasksContainer'>
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
