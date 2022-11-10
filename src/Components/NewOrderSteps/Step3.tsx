import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Stack, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect';
import { IFormData } from '../../Pages/NewOrder';
import DatePicker from '../CustomDatePicker';
import CustomTimePicker from '../CustomTimePicker';
import './style.sass';
import { DateTime } from 'luxon';
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
	const [dateType, setDateType] = useState('Начало работы');
	const [dateFieldName, setDateFieldName] = useState<string | null>('');
	const [timeFieldName, setTimeFieldName] = useState<string | null>('');
	const [dateFieldVal, setDateFieldVal] = useState<string | null>(
		formData.start_date
	);
	const [timeFieldVal, setTimeFieldVal] = useState<string | null>(
		formData.start_time
	);
	const [errors, setErrors] = useState(initialErrors);

	const keys = Object.keys(dateTypes[0]);

	const selectDateField = (option: string): void => {
		if (option !== 'period') {
			switch (option) {
				case 'start':
					setDateFieldName('start_date');
					setDateFieldVal(formData.start_date);
					break;
				case 'end':
					setDateFieldName('end_date');
					setDateFieldVal(formData.end_date);
					break;
				default:
					setDateFieldName('start_date');
					setDateFieldVal(formData.start_date);
			}
		}
	};

	const selectTimeField = (option: string): void => {
		if (option !== 'period') {
			switch (option) {
				case 'start':
					setTimeFieldName('start_time');
					setTimeFieldVal(formData.start_time);
					break;
				case 'end':
					setTimeFieldName('end_time');
					setTimeFieldVal(formData.end_time);
					break;
				default:
					setTimeFieldName('start_time');
					setTimeFieldVal(formData.start_time);
			}
		}
	};

	const handleDateTimeChange =
		(field: string) =>
		(date: string | null): void => {
			onChange(field, date);
			console.log(field, date);
		};

	const handleSelect = (event: SelectChangeEvent<string | unknown>) => {
		setDateType(event.target.value as string);
		selectDateField(event.target.value as string);
		selectTimeField(event.target.value as string);
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
				menuItemValue={keys[1]}
				menuItemKey={keys[0]}
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
						onChange={handleDateTimeChange(dateFieldName!)}
						value={dateFieldVal}
						className='step__input'
						inputClassName='date-input'
					/>
					<CustomTimePicker
						id='time'
						label='Выберите время'
						onChange={handleDateTimeChange(timeFieldName!)}
						value={timeFieldVal}
						className='step__time-input'
					/>
				</Stack>
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
