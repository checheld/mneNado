import React, { useState } from 'react';
import {Box, OutlinedInput, OutlinedInputProps } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import './style.css';
import ParametersIcon from './Components/ParametersIcon';
import SearchModal from '../SearchModal/Index';

interface IProps extends OutlinedInputProps {
	props?: OutlinedInputProps;
}

const SearchForm: React.FC<IProps> = ({ props }) => {

	const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

	return (
		<>
			<SearchModal open={open} handleClose={handleClose} />
			<Box className='firstRowContainer'>
				<OutlinedInput
					placeholder='Поиск по ключевым словам'
					className='searchInput'
					{...props}
				/>
				<Box className='buttonContainer'>
					<Box className='parametersIconContainer'
						onClick={(handleOpen)}
					>
						<ParametersIcon className="svg"/>
					</Box>
					<CustomButton
						text='Найти'
						onClick={() => console.log(1)}
					/>
				</Box>
			</Box>		
		</>
	);
};

export default SearchForm;
