import React from 'react';
import {
	Box,
	Checkbox,
	OutlinedInput,
	OutlinedInputProps,
} from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect/Index';
import './style.css';
import CustomCheckbox from '../CustomCheckbox';
import ParametersIcon from './Components/ParametersIcon';

interface IProps extends OutlinedInputProps {
	props?: OutlinedInputProps;
}

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const searchForm: React.FC<IProps> = ({ props }) => {
	return (
		<Box className='firstRowContainer'>
			<OutlinedInput
				placeholder='Поиск по ключевым словам'
				className='searchInput'
				{...props}
			/>
			<Box className='buttonContainer'>
				<Box className='parametersIconContainer'>
					<ParametersIcon className="svg"/>
				</Box>
				<CustomButton
					text='Найти'
					onClick={() => console.log(1)}
				/>
			</Box>
		</Box>		
	);
};

export default searchForm;
