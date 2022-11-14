import React, { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import RangeSlider from '../RangeSlider';
import InputCustomized from '../InputCustomized';
import RadioButtons from '../RadioButtons';
import './style.sass';

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | number | number[]) => void;
	setStep: (step: number) => void;
}

const paymentMethods = [
	{ key: 'direct', value: 'Напрямую исполнителю' },
	{ key: 'application', value: 'Через приложение' },
];

const Step5: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [budget, setBudget] = useState<number[]>([0, 0]);

	const handleRangeChange = (values: { min: number; max: number }) => {
		const valuesArr = Object.values(values);
		setBudget(valuesArr);
		console.log(values);
		onChange('budget', budget);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
	};

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange('payment_method', (event.target as HTMLInputElement).value);
	};

	const handlePrev = (): void => {
		setStep(3);
	};
	const handleSubmit = (): void => {
		console.log(formData);
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
				middle={5000}
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
			/>
			<RadioButtons
				name='payment_method'
				values={paymentMethods}
				value={formData.payment_method}
				onChange={handleRadioChange}
				className='step__radio-group'
				aria-labelledby='Выбор способа оплаты'
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
