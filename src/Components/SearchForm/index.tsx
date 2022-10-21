import React from 'react';
import { Input } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import './style.sass';

const searchForm: React.FC = () => {
	return (
		<>
			<Input placeholder='Поиск по ключевым словам' sx={{ mr: '25px' }} />
			<CustomButton text='Найти' onClick={() => console.log(1)}></CustomButton>
		</>
	);
};

export default searchForm;
