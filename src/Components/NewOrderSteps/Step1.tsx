import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import CustomSelect from '../CustomSelect';
import { IFormData } from '../../Pages/NewOrder';

// import { validateBirthday, validateField } from '../common/validation';

const categories = [
	{ category_id: 1, category: 'Доставка' },
	{ category_id: 2, category: 'Ремонт' },
];
const subcategories = [
	{ subcategory_id: 1, subcategory: 'Подкатегория 1' },
	{ subcategory_id: 2, subcategory: 'Подкатегория 2' },
];
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
	const categoryKeys = Object.keys(categories[0]);
	const subcategoryKeys = Object.keys(subcategories[0]);
	const [category, setCategory] = useState('');
	const [subcategory, setSubcategory] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		// setErrors({ ...errors, [e.target.name]: '' });
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
		console.log('first', formData);
	};

	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Что нужно сделать?
			</Typography>
			<CustomInput
				item={formData.task_name}
				onChange={handleInputChange}
				check={false}
				placeholder='Что нужно сделать?'
				label='Название задания'
			></CustomInput>
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
				<CustomButton text='Далее' onClick={handleNext} className='step-btn' />
			</Box>
		</>
	);
};

export default Step1;
