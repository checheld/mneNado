import React, { FC, useEffect, useState } from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import RangeSlider from '../RangeSlider';
import './style.sass';
import InputCustomized from '../InputCustomized';

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | number |null) => void;
	setStep: (step: number) => void;
}

const Step5: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [exactBudget, setExactBudget] = useState(formData.budget)
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
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
			<Typography component='p'>Укажите диапазон или точную сумму</Typography>
			<RangeSlider min={300} middle={5000} max={10000} onChange={() => {}} />
			<InputCustomized 
				value={String(formData.budget)} 
				onChange={handleInputChange}
				name='budget'
				placeholder='Какую сумму вы готовы заплатить'
				label='Точная сумма'
				className='step__input'
			/>
			<FormControl>
				<FormLabel id="demo-controlled-radio-buttons-group">Выберите способ оплаты</FormLabel>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					value={''}
					onChange={()=> {}}
				>
					<FormControlLabel value="female" control={<Radio />} label="Напрямую исполнителю" />
					<FormControlLabel value="male" control={<Radio />} label="Через площадку" />
				</RadioGroup>
			</FormControl>
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
