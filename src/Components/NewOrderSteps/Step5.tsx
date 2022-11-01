import React, { FC } from 'react';
import { Box, Slider, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import CustomSlider from '../CustomSlider';
import { budgets } from '../../dummyData';
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

function valuetext(value: number) {
	return `${value}₽`;
}

const Step5: FC<IProps> = ({ formData, onChange, setStep }) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		// setErrors({ ...errors, [e.target.name]: '' });
	};

	const handlePrev = (): void => {
		setStep(3);
	};
	const handleSubmit = (): void => {
		console.log('first');
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Бюджет и способ оплаты
			</Typography>
			<Slider
				aria-label='Custom marks'
				defaultValue={0}
				value={formData.budget}
				getAriaValueText={valuetext}
				step={20}
				valueLabelDisplay='auto'
				marks={budgets}
			/>
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
