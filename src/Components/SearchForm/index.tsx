import React from 'react';
import { Box, Checkbox, OutlinedInput, OutlinedInputProps } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect/Index';
import './style.css';

interface IProps extends OutlinedInputProps {
	props?: OutlinedInputProps;
}

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const searchForm: React.FC<IProps> = ({ props }) => {
	return (
		<Box>
			<Box className='firstRowContainer'>
				<OutlinedInput
					placeholder='Поиск по ключевым словам'
					className='searchInput'
					{...props}
				/>
				<CustomButton text='Найти' onClick={() => console.log(1)}></CustomButton>
			</Box>
			<OutlinedInput
				placeholder='Адрес'
				className='adressInput'
				{...props}
			/>
			<Box className='thirdRowContainer'>
				<CustomSelect />
				<OutlinedInput
					placeholder='Стоимость'
					className='priceInput'
					{...props}
				/>
			</Box>
			{/* <Box>
				<Checkbox {...label} />
			</Box> */}
		</Box>
	);
};

export default searchForm;
