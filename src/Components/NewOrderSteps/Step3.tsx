import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Stack, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect';
import { IFormData } from '../../Pages/NewOrder';
import DatePicker from '../CustomDatePicker';
import CustomTimePicker from '../CustomTimePicker';
import './style.sass';

const dateTypes = [
	{ value: 'start', label: 'Начало работы' },
	{ value: 'end', label: 'Завершение работы' },
	{ value: 'period', label: 'Период' },
];

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	start_date?: '';
	end_date?: '';
}

const initialErrors: IErrorsData = {
	start_date: '',
	end_date: '',
};

const Step3: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [dateType, setDateType] = useState('start');
	const [errors, setErrors] = useState(initialErrors);

	const keys = Object.keys(dateTypes[0]);

	const handleDateTimeChange =
		(field: string) =>
		(date: string | null): void => {
			onChange(field, date);
		};

	const handleSelect = (event: SelectChangeEvent<string | unknown>) => {
		setDateType(event.target.value as string);
	};

	const handlePrev = (): void => {
		setStep(1);
		// join date and time before sending to server
	};
	const handleNext = (): void => {
		setStep(3);
	};

	console.log(dateType);
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
				menuItemValue={keys[0]}
				menuItemLabel={keys[1]}
				sx={{ mb: '30px' }}
			/>
			{dateType !== 'period' && (
				<Stack
					direction='row'
					sx={{ mb: '30px' }}
					justifyContent='space-evenly'
				>
					<DatePicker
						id='date'
						label='Выберите дату'
						placeholder='Дата'
						onChange={handleDateTimeChange(
							`${dateType === 'start' ? 'start_date' : 'end_date'}`
						)}
						value={
							dateType === 'start' ? formData.start_date : formData.end_date
						}
						disablePast
						className='step__input'
						inputClassName='date-input'
					/>
					<CustomTimePicker
						id='time'
						label='Выберите время'
						onChange={handleDateTimeChange(
							`${dateType === 'start' ? 'start_time' : 'end_time'}`
						)}
						value={
							dateType === 'start' ? formData.start_time : formData.end_time
						}
						className='step__time-input'
					/>
				</Stack>
			)}
			{dateType === 'period' && (
				<>
					<Typography component='h6' className='input-heading'>
						Начать работу
					</Typography>
					<Stack
						direction='row'
						sx={{ mb: '30px' }}
						justifyContent='space-evenly'
					>
						<DatePicker
							id='date'
							label='Выберите дату'
							placeholder='Дата'
							onChange={handleDateTimeChange('start_date')}
							value={formData.start_date}
							disablePast
							className='step__input'
							inputClassName='date-input'
						/>
						<CustomTimePicker
							id='time'
							label='Выберите время'
							onChange={handleDateTimeChange('end_time')}
							value={formData.end_time}
							className='step__time-input'
						/>
					</Stack>
					<Typography component='h6' className='input-heading'>
						Завершить работу
					</Typography>
					<Stack
						direction='row'
						sx={{ mb: '30px' }}
						justifyContent='space-evenly'
					>
						<DatePicker
							id='date'
							label='Выберите время'
							placeholder='Дата'
							onChange={handleDateTimeChange('end_date')}
							value={formData.end_date}
							disablePast
							className='step__input'
							inputClassName='date-input'
						/>
						<CustomTimePicker
							id='time'
							label='Выберите время'
							onChange={handleDateTimeChange('end_time')}
							value={formData.end_time}
							className='step__time-input'
						/>
					</Stack>
				</>
			)}
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
