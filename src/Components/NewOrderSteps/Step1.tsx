import React, { FC, useState } from 'react';
import { Typography } from '@mui/material';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import { IFormData } from '../../Pages/NewOrder';

// import { validateBirthday, validateField } from '../common/validation';
interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	task_name: string;
	category?: string;
	subcategory?: string;
}

const initialErrors: IErrorsData = {
	task_name: '',
};

const Step1: FC<IProps> = ({ formData, onChange, setStep }) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		// setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleNext = (): void => {
		setStep(1);
	};
	return (
		<>
			<CustomInput
				item={formData.task_name}
				onChange={handleInputChange}
				check={false}
				placeholder='Что нужно сделать?'
				label='Название задания'
			></CustomInput>
			<CustomButton text='Далее' onClick={handleNext} />
		</>
	);
};

export default Step1;
