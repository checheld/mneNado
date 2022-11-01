import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect';
import { IFormData } from '../../Pages/NewOrder';
import DatePicker from '../DatePicker';
import './style.sass';

const dateTypes = [
	{ value: 'start', label: 'Начало работы' },
	{ value: 'end', label: 'Завершение работы' },
	{ value: 'period', label: 'Период' },
];

// import { validateBirthday, validateField } from '../common/validation';
interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	start_date: '';
	end_date?: '';
}

const initialErrors: IErrorsData = {
	start_date: '',
	end_date: '',
};

const Step3: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [dateType, setDateType] = useState('start');

	const keys = Object.keys(dateTypes[0]);

	const handleDatepickerChange = (date: string | null): void => {
		onChange('date_of_birth', date);
	};

	const handleSelect = (event: SelectChangeEvent<string | unknown>) => {
		setDateType(event.target.value as string);
	};

	const handlePrev = (): void => {
		setStep(1);
	};
	const handleNext = (): void => {
		setStep(3);
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Сроки выполнения
			</Typography>
			<CustomSelect
				value={dateType}
				values={dateTypes}
				onChange={handleSelect}
				className='select'
				formControlClass='select-wrap'
				valueKey={keys[0]}
				textKey={keys[1]}
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

export default Step3;
