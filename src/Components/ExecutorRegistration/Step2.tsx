import { FormHelperText } from '@mui/material';
import React, { FC, useState } from 'react';
import { IExecutorData } from '../../Pages/RegisterExecutor';
import CustomRadiogroup from '../CustomRadiogroup';
import InputCustomized from '../InputCustomized';

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
	repeatPassword: string;
}

const initialErrors = {
	type: '',
	phone: '',
	email: '',
	password: '',
	repeatPassword: '',
};

const options = [
	{ optValue: 'phone', optLabel: 'По номеру телефона' },
	{ optValue: 'email', optLabel: 'По электронной опчте' },
];

const Step2: React.FC<IProps> = ({ executorData, onChange, setStep }) => {
	const [type, setType] = useState('');
	const [errors, setErrors] = useState<IErrors>(initialErrors);

	const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setType((event.target as HTMLInputElement).value);
		setErrors({ ...errors, type: '' });
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const validateFields = () => {
		let typeError;
		type.trim() === ''
			? (typeError = 'Выберите способ регистрации')
			: (typeError = '');
	};

	return (
		<>
			<CustomRadiogroup
				id='registration_type'
				name='registration_type'
				label='Выберите способ регистрации'
				value={type}
				options={options}
				onChange={handleOptionSelect}
			/>
			<FormHelperText>{errors.type}</FormHelperText>
			{type === 'email' ? (
				<InputCustomized
					name='email'
					value={executorData.email!}
					onChange={handleInputChange}
					placeholder='example@email.com'
					label='Ваш email'
					error={errors.email}
					className='step__input'
				/>
			) : null}
			{type === 'phone' ? (
				<InputCustomized
					name='phone'
					value={executorData.phone!}
					onChange={handleInputChange}
					placeholder='8'
					label='Введите номер телефона'
					error={errors.phone}
					className='step__input'
				/>
			) : null}
		</>
	);
};

export default Step2;
