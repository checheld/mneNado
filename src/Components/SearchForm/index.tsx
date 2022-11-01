import React from 'react';
import { OutlinedInput, OutlinedInputProps } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import './style.sass';

interface IProps extends OutlinedInputProps {
	props?: OutlinedInputProps;
}

const searchForm: React.FC<IProps> = ({ props }) => {
	return (
		<>
			<OutlinedInput
				placeholder='Поиск по ключевым словам'
				sx={{ width: '25vw' }}
				{...props}
			/>
			<CustomButton text='Найти' onClick={() => console.log(1)}></CustomButton>
		</>
	);
};

export default searchForm;
