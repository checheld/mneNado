import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import CustomButton from '../CustomButton';
import CustomSelect from '../CustomSelect';
import { IFormData } from '../../Pages/NewOrder';
import './style.sass';

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	description: '';
}

const initialErrors: IErrorsData = {
	description: '',
};

const Step4: FC<IProps> = ({ formData, onChange, setStep }) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		// setErrors({ ...errors, [e.target.name]: '' });
	};

	const handlePrev = (): void => {
		setStep(3);
	};
	const handleNext = (): void => {
		setStep(4);
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Детали задания
			</Typography>

			<Box className='btn-container'>
				<CustomButton
					text='Назад'
					onClick={handlePrev}
					variant='outlined'
					sx={{ color: '#CBD8DD !important' }}
					className='step-btn back-btn'
				/>
				<CustomButton text='Далее' onClick={handleNext} className='step-btn' />
			</Box>
		</>
	);
};

export default Step4;
