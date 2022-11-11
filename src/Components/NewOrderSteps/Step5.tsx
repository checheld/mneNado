import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import RangeSlider from '../RangeSlider';
import './style.sass';

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | null) => void;
	setStep: (step: number) => void;
}

const Step5: FC<IProps> = ({ formData, onChange, setStep }) => {
	const handlePrev = (): void => {
		setStep(3);
	};
	const handleSubmit = (): void => {
		console.log(formData);
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Бюджет и способ оплаты
			</Typography>
			<RangeSlider min={300} max={10000} onChange={() => {}} />
			<Box className='btn-container'>
				<CustomButton
					text='Назад'
					onClick={handlePrev}
					variant='outlined'
					sx={{ color: '#CBD8DD !important' }}
					className='step-btn back-btn'
				/>
				<CustomButton
					text='Создать'
					onClick={handleSubmit}
					className='step-btn'
				/>
			</Box>
		</>
	);
};

export default Step5;
