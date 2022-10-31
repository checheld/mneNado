import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import CustomButton from '../CustomButton';
import CustomSelect from '../CustomSelect';
import { IFormData } from '../../Pages/NewOrder';
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
	const [dateType, setDateType] = useState('');
	const keys = Object.keys(dateTypes[0]);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		// setErrors({ ...errors, [e.target.name]: '' });
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
				label='Выберите категорию'
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
