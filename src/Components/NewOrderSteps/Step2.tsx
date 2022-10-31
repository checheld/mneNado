import React, { useState } from 'react';
import { Box, FormControlLabel, Typography } from '@mui/material';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import { IFormData } from '../../Pages/NewOrder';
import './style.sass';
import CustomCheckbox from '../CustomCheckbox';

// import { validateBirthday, validateField } from '../common/validation';
interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	address: string;
}

const initialErrors: IErrorsData = {
	address: '',
};

const Step2: React.FC<IProps> = ({ formData, onChange, setStep }) => {
	const [isOnline, setIsOnline] = useState(false);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		// setErrors({ ...errors, [e.target.name]: '' });
	};
	const handleCheckboxChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		checked: boolean
	): void => {
		setIsOnline(e.target.checked);
	};

	const handlePrev = (): void => {
		setStep(0);
	};
	const handleNext = (): void => {
		setStep(2);
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				По какому адресу?
			</Typography>
			<CustomInput
				item={formData.task_name}
				onChange={handleInputChange}
				check={false}
				placeholder='Город, улица, дом'
				label='Адрес'
			></CustomInput>
			<FormControlLabel
				control={
					<CustomCheckbox name='electronic' onChange={handleCheckboxChange} />
				}
				label={
					<Typography variant='body1' sx={{ mb: 0 }}>
						Выполнить удаленно
					</Typography>
				}
				sx={{ mb: '50px' }}
			/>

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

export default Step2;
