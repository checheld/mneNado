import React, { FC, useEffect, useState } from 'react';
import { Box, FormHelperText, Typography } from '@mui/material';
import {
	AddressSuggestions,
	DaDataAddress,
	DaDataSuggestion,
} from 'react-dadata';
import CustomButton from '../CustomButton/Index';
import DatePicker from '../CustomDatePicker';
import CustomInput, { StyledInput } from '../CustomInput';
import { IExecutorData } from '../../Pages/RegisterExecutor';
import '../NewOrderSteps/style.sass';
import { validateDate, validateField } from '../../utils/validation';

interface IProps {
	executorData: IExecutorData;
	onChange: (name: string, value: string | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	first_name: string;
	last_name: string;
	date_of_birth: string;
	city: string;
}

const initialErrors: IErrorsData = {
	first_name: '',
	last_name: '',
	date_of_birth: '',
	city: '',
};

const RegStep1: FC<IProps> = ({ executorData, onChange, setStep }) => {
	const suggestionsRef = React.useRef<AddressSuggestions>(null);
	const [value, setValue] = useState<
		DaDataSuggestion<DaDataAddress> | undefined
	>();
	const [errors, setErrors] = useState<IErrorsData>(initialErrors);
	const [errorClass, setErrorClass] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleDateChange = (date: string | null): void => {
		onChange('date_of_birth', date);
		setErrors({ ...errors, date_of_birth: '' });
		setErrorClass('');
	};

	const handleAddressInputChange = (
		e: DaDataSuggestion<DaDataAddress> | undefined
	) => {
		onChange('city', e!.value);
		setErrors({ ...errors, city: '' });
		setErrorClass('');
	};

	const validateInputs = (): boolean => {
		const firstNameError = validateField(executorData.first_name);
		const lastNameError = validateField(executorData.last_name);
		const birthdayError = validateDate(executorData.date_of_birth);
		const cityError = validateField(executorData.city);
		if (firstNameError || lastNameError || birthdayError || cityError) {
			setErrors({
				first_name: firstNameError,
				last_name: lastNameError,
				date_of_birth: birthdayError,
				city: cityError,
			});
		}
		return [firstNameError, lastNameError, birthdayError, cityError].every(
			(el) => !el
		);
	};

	const handleNext = (): void => {
		if (validateInputs()) {
			setStep(1);
		}
	};

	return (
		<>
			<CustomInput
				name='first_name'
				value={executorData.first_name}
				onChange={handleInputChange}
				placeholder='Введите имя'
				label='Имя'
				error={errors.first_name}
				className='step__input'
			/>
			<CustomInput
				name='last_name'
				value={executorData.last_name}
				onChange={handleInputChange}
				placeholder='Введите фамилию'
				label='Фамилия'
				error={errors.last_name}
				className='step__input'
			/>
			<DatePicker
				id='date'
				label='Ваша дата рождения'
				placeholder='Дата рождения'
				onChange={handleDateChange}
				value={executorData.date_of_birth}
				error={errors.date_of_birth}
				disableFuture
				inputClassName={`date-input ${errorClass}`}
				className='step__input date'
			/>
			<AddressSuggestions
				ref={suggestionsRef}
				token={process.env.REACT_APP_API_KEY!}
				value={value}
				customInput={StyledInput}
				filterFromBound='city'
				inputProps={{
					name: 'city',
					placeholder: 'Населенный пункт',
				}}
				onChange={handleAddressInputChange}
			/>
			<FormHelperText className='error-text'>{errors.city}</FormHelperText>
			<Box className='btn-container' sx={{ mt: '30px' }}>
				<CustomButton text='Далее' onClick={handleNext} className='step-btn' />
			</Box>
		</>
	);
};

export default RegStep1;
