import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect';
import CustomInput from '../CustomInput';
import { IFormData } from '../../Pages/NewOrder';
import { validateField } from '../../utils/validation';
import { useTypedSelector } from '../../hooks/hooks';

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

const Step3: FC<IProps> = ({ formData, onChange, setStep }) => {
	const { categories } = useTypedSelector((state) => state.categoriesState);
	const { subcategories } = useTypedSelector(
		(state) => state.subcategoriesState
	);

	const categoryKeys = Object.keys(categories[0]);
	const subcategoryKeys = Object.keys(subcategories[0]);
	const [errors, setErrors] = useState<IErrorsData>(initialErrors);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleSelect = (event: SelectChangeEvent<string | unknown>) => {
		onChange(event.target.name, event.target.value as string);
	};

	const validateInputs = (): boolean => {
		const nameError = validateField(formData.task_name);
		if (nameError) {
			setErrors({ task_name: nameError });
		}
		return !nameError;
	};

	const handlePrev = (): void => {
		setStep(1);
	};

	const handleNext = (): void => {
		if (validateInputs()) {
			setStep(3);
		}
	};

	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Что нужно сделать?
			</Typography>
			<CustomInput
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
					name='category'
					label='Выберите категорию'
					value={formData.category}
					values={categories}
					menuItemValue={categoryKeys[0]}
					menuItemLabel={categoryKeys[1]}
					onChange={handleSelect}
					className='select'
					formControlClass='select-wrap'
				/>
				<CustomSelect
					name='subcategory'
					label='Выберите подкатегорию'
					value={formData.subcategory}
					values={subcategories.filter(
						(el) => el.category === +formData.category
					)}
					menuItemValue={subcategoryKeys[0]}
					menuItemLabel={subcategoryKeys[1]}
					onChange={handleSelect}
					className='select'
					formControlClass='select-wrap'
				/>
			</Box>
			<Box className='btn-container'>
				<CustomButton
					text='Назад'
					onClick={handlePrev}
					variant='outlined'
					sx={{ color: '#CBD8DD !important' }}
					className='step-btn back-btn'
				/>
				<CustomButton text='Далее' onClick={handleNext} className='step-btn' />
			</Box>
		</>
	);
};

export default Step3;
