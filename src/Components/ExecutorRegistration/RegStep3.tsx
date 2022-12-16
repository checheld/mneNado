import { Box, FormHelperText, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IExecutorData } from '../../Pages/RegisterExecutor';
import {
	compareValues,
	validateEmail,
	validatePhone,
	validatePassword,
} from '../../utils/validation';
import CustomButton from '../CustomButton/Index';
import CustomInput from '../CustomInput';
import PasswordInput from '../PasswordInput';
import RadioButtons from '../RadioButtons';
const InputMask = require('react-input-mask');

interface IProps {
	executorData: IExecutorData;
	onChange: (name: string, value: string | null) => void;
	setStep: (step: number) => void;
}

interface IErrors {
	type: string;
	phone: string;
	email: string;
	password: string;
	repeat_password: string;
}

const initialErrors = {
	type: '',
	phone: '',
	email: '',
	password: '',
	repeat_password: '',
};

const options = [
	{ key: 'phone', value: 'По номеру телефона' },
	{ key: 'email', value: 'По электронной почте' },
];

const RegStep3: React.FC<IProps> = ({ executorData, onChange, setStep }) => {
	const navigate = useNavigate();
	const [type, setType] = useState('email');
	const [errors, setErrors] = useState<IErrors>(initialErrors);
	const [errorClass, setErrorClass] = useState('');

	const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setType((event.target as HTMLInputElement).value);
		setErrors({ ...errors, type: '' });
		setErrorClass('');
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const validateInputs = () => {
		let typeError, phoneError, emailError;
		if (type.trim() === '') {
			typeError = 'Выберите способ регистрации';
			setErrorClass('error');
		} else {
			typeError = '';
		}
		type === 'phone'
			? (phoneError = validatePhone(executorData.phone as string))
			: (phoneError = '');
		type === 'email'
			? (emailError = validateEmail(executorData.email as string))
			: (emailError = '');
		const passwordError = validatePassword(executorData.password);
		const repeatError = compareValues(
			executorData.password,
			executorData.repeat_password
		);

		if (typeError || emailError || passwordError || repeatError) {
			setErrors({
				type: typeError,
				email: emailError,
				phone: phoneError,
				password: passwordError,
				repeat_password: repeatError,
			});
		}

		return [
			typeError,
			emailError,
			phoneError,
			passwordError,
			repeatError,
		].every((el) => !el);
	};

	const handlePrev = (): void => {
		setStep(1);
	};

	const handleNext = (): void => {
		if (validateInputs()) {
			console.log('executorData', executorData);
			navigate('/profile');
		}
	};

	return (
		<>
			<RadioButtons
				name='type'
				values={options}
				value={type}
				onChange={handleOptionSelect}
				className={`step__radio-group ${errorClass}`}
			/>
			{type === 'email' ? (
				<CustomInput
					name='email'
					value={executorData.email!}
					onChange={handleInputChange}
					placeholder='example@email.com'
					label='Адрес электронной почты'
					error={errors.email}
					className='step__input'
				/>
			) : null}
			{type === 'phone' ? (
				<>
					<InputMask
						mask='+7 (999) 999-99-99'
						value={executorData.phone!}
						name='phone'
						onChange={handleInputChange}
						className='step__input'
					>
						<TextField label='Номер телефона' />
					</InputMask>
					<FormHelperText className='error-text'>{errors.phone}</FormHelperText>
				</>
			) : null}
			<PasswordInput
				id='password'
				name='password'
				placeholder='••••••••'
				value={executorData.password}
				onChange={handleInputChange}
				label='Пароль'
				error={errors.password}
				className='password-input'
			/>
			<PasswordInput
				id='repeat_password'
				name='repeat_password'
				placeholder='••••••••'
				value={executorData.repeat_password}
				onChange={handleInputChange}
				label='Повторите пароль'
				error={errors.repeat_password}
				className='password-input'
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
					text='Зарегистрироваться'
					onClick={handleNext}
					className='step-btn'
				/>
			</Box>
		</>
	);
};

export default RegStep3;
