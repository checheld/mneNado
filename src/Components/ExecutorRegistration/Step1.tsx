import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
	AddressSuggestions,
	DaDataAddress,
	DaDataSuggestion,
} from 'react-dadata';
import CustomButton from '../CustomButton/Index';
import DatePicker from '../CustomDatePicker';
import InputCustomized, { StyledInput } from '../InputCustomized';
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

const Step1: FC<IProps> = ({ executorData, onChange, setStep }) => {
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
		onChange('address', e!.value);
		setErrors({ ...errors, city: '' });
		setErrorClass('');
		console.log('executo', executorData);
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
		setStep(1);
	};

	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Персональные данные
			</Typography>
			<>
				<InputCustomized
					name='first_name'
					value={executorData.first_name}
					onChange={handleInputChange}
					placeholder='Введите имя'
					label='Ваше имя'
					error={errors.first_name}
					className='step__input'
				/>
				<InputCustomized
					name='last_name'
					value={executorData.last_name}
					onChange={handleInputChange}
					placeholder='Введите фамилию'
					label='Ваша фамилия'
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
			</>
			<Box className='btn-container'>
				<CustomButton text='Далее' onClick={handleNext} className='step-btn' />
			</Box>
		</>
	);
};

export default Step1;
