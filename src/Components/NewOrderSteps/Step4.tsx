import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Stack, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect';
import { IFormData } from '../../Pages/NewOrder';
import DatePicker from '../CustomDatePicker';
import CustomTimePicker from '../CustomTimePicker';
import { validateDate, validatePeriod } from '../../utils/validation';
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
	start_date?: string;
	end_date?: string;
}

const initialErrors: IErrorsData = {
	start_date: '',
	end_date: '',
};

const Step4: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [dateType, setDateType] = useState('start');
	const [errors, setErrors] = useState(initialErrors);
	const [errorClass, setErrorClass] = useState('');

	const keys = Object.keys(dateTypes[0]);

	const handleDateTimeChange =
		(field: string) =>
		(date: string | null): void => {
			onChange(field, date);
			setErrors({ ...errors, [field]: '' });
			setErrorClass('');
		};

	const handleSelect = (event: SelectChangeEvent<string | unknown>) => {
		setDateType(event.target.value as string);
	};

	const validateInputs = (): boolean => {
		let endDateError;
		const startDateError = validateDate(formData.start_date);
		if (dateType === 'start') {
			setErrors({ start_date: startDateError, end_date: '' });
			setErrorClass('error');
			return !startDateError;
		} else if (dateType === 'end') {
			endDateError = validateDate(formData.end_date);
			setErrors({ end_date: endDateError });
			setErrorClass('error');
			return !endDateError;
		} else if (dateType === 'period') {
			endDateError = validatePeriod(formData.start_date, formData.end_date);
			setErrors({ start_date: startDateError, end_date: endDateError });
			setErrorClass('error');
			return [startDateError, endDateError].every((el) => !el);
		}
		return [startDateError, endDateError].every((el) => !el);
	};

	const handlePrev = (): void => {
		setStep(2);
	};
	const handleNext = (): void => {
		// join date and time before sending to server
		if (validateInputs()) {
			setStep(4);
		}
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
				menuItemValue={keys[0]}
				menuItemLabel={keys[1]}
				sx={{ mb: '30px' }}
			/>
			{dateType !== 'period' && (
				<Stack
					direction='row'
					sx={{ m: '0 auto', mb: '30px', w: '100%' }}
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
						error={dateType === 'start' ? errors.start_date : errors.end_date}
						disablePast
						className='step__input date'
						inputClassName={`date-input ${errorClass}`}
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
							className='step__input date'
							inputClassName={`date-input ${errorClass}`}
							error={errors.start_date}
						/>
						<CustomTimePicker
							id='time'
							label='Выберите время'
							onChange={handleDateTimeChange('start_time')}
							value={formData.start_time}
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
							className='step__input date'
							inputClassName={`date-input ${errorClass}`}
							error={errors.end_date}
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

export default Step4;
