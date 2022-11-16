import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import RangeSlider from '../RangeSlider';
import InputCustomized from '../InputCustomized';
import RadioButtons from '../RadioButtons';
import { validateBudget } from '../../utils/validation';
import './style.sass';

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | number | number[]) => void;
	setStep: (step: number) => void;
}

interface IErrors {
	budget?: string;
	payment_method: string;
}

const initialErrors: IErrors = {
	budget: '',
	payment_method: '',
};

const paymentMethods = [
	{ key: 'direct', value: 'Напрямую исполнителю' },
	{ key: 'application', value: 'Через приложение' },
];

const Step5: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [budget, setBudget] = useState<number[]>([0, 0]);
	const [errors, setErrors] = useState<IErrors>(initialErrors);
	const [errorClass, setErrorClass] = useState('');

	const handleRangeChange = (values: { min: number; max: number }) => {
		const valuesArr = Object.values(values);
		setBudget(valuesArr);
		onChange('budget', budget);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, budget: '' });
	};

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange('payment_method', (event.target as HTMLInputElement).value);
		setErrors({ ...errors, payment_method: '' });
		setErrorClass('');
	};

	const validateInputs = (): boolean => {
		let budgetError, methodError;
		if (typeof formData.budget === 'string') {
			budgetError = validateBudget(formData.budget);
			setErrors({ budget: budgetError, payment_method: '' });
		}
		if (formData.payment_method.trim() === '') {
			methodError = 'Пожалуйста, выберите способ оплаты';
			setErrorClass('radio-error');
		}
		if (methodError || budgetError)
			setErrors({ budget: budgetError, payment_method: methodError as string });
		return [budgetError, methodError].every((el) => !el);
	};

	const handlePrev = (): void => {
		setStep(3);
	};
	const handleSubmit = (): void => {
		if (validateInputs()) {
			setStep(5);
		}
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Бюджет и способ оплаты
			</Typography>
			<Typography component='p' sx={{ textAlign: 'center', mb: '30px' }}>
				Укажите диапазон или точную сумму
			</Typography>
			<RangeSlider
				min={300}
				middle={[2500, 5000, 7500]}
				max={10000}
				onChange={handleRangeChange}
			/>
			<InputCustomized
				value={
					typeof formData.budget === 'string' ? String(formData.budget) : ''
				}
				onChange={handleInputChange}
				name='budget'
				placeholder='Какую сумму вы готовы заплатить'
				label='Точная сумма'
				className='step__input'
				error={errors.budget}
			/>
			<RadioButtons
				name='payment_method'
				values={paymentMethods}
				value={formData.payment_method}
				onChange={handleRadioChange}
				className={`step__radio-group ${errorClass}`}
				aria-labelledby='Выбор способа оплаты'
				error={errors.payment_method}
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
