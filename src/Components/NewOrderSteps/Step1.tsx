import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect';
import InputCustomized from '../InputCustomized';
import { IFormData } from '../../Pages/NewOrder';
import { categories, subcategories } from '../../dummyData';

// import { validateBirthday, validateField } from '../common/validation';
interface IProps {
	formData: IFormData;
	onChange: (item: string, value: string | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	task_name: string;
}

const initialErrors: IErrorsData = {
	task_name: '',
};

const Step1: FC<IProps> = ({ formData, onChange, setStep }) => {
	const categoryKeys = Object.keys(categories[0]);
	const subcategoryKeys = Object.keys(subcategories[0]);

	const [category, setCategory] = useState('');
	const [subcategory, setSubcategory] = useState('');
	const [errors, setErrors] = useState<IErrorsData>(initialErrors);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleCategorySelect = (event: SelectChangeEvent<string | unknown>) => {
		setCategory(event.target.value as string);
	};

	const handleSubcategorySelect = (
		event: SelectChangeEvent<string | unknown>
	) => {
		setSubcategory(event.target.value as string);
	};

	const handleNext = (): void => {
		setStep(1);
	};

	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Что нужно сделать?
			</Typography>
			<InputCustomized
				name='task_name'
				value={formData.task_name}
				onChange={handleInputChange}
				placeholder='Что нужно сделать?'
				label='Название задания'
				error={errors.task_name}
				className='step__input'
			/>
			<Box className='select-container'>
				<CustomSelect
					label='Выберите категорию'
					value={category}
					values={categories}
					valueKey={categoryKeys[0]}
					textKey={categoryKeys[1]}
					onChange={handleCategorySelect}
					className='select'
					formControlClass='select-wrap'
				/>
				<CustomSelect
					label='Выберите подкатегорию'
					value={subcategory}
					values={subcategories}
					valueKey={subcategoryKeys[0]}
					textKey={subcategoryKeys[1]}
					onChange={handleSubcategorySelect}
					className='select'
					formControlClass='select-wrap'
				/>
			</Box>
			<Box className='btn-container'>
				<CustomButton text='Далее'
					onClick={handleNext}
					className='step-btn'
				/>
			</Box>
		</>
	);
};

export default Step1;
