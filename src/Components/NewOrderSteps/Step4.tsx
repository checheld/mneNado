import React, { FC, useState } from 'react';
import { Box, SelectChangeEvent, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import CustomSelect from '../CustomSelect';
import { IFormData } from '../../Pages/NewOrder';
import './style.sass';
import CustomTextarea from '../CustomTextarea';
import CustomDropzone from '../Dropzone';

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | boolean | File | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	description: '';
}

const initialErrors: IErrorsData = {
	description: '',
};

const Step4: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [file, setFile] = useState(formData.file);
	const [modalOpened, setModalOpened] = useState(false);
	const [errors, setErrors] = useState(initialErrors);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleClear = (): void => {
		setFile(null);
	};

	const openModal = (): void => {
		setModalOpened(true);
	};

	const closeModal = (): void => {
		setModalOpened(false);
	};

	const handlePrev = (): void => {
		setStep(3);
		setFile(file);
	};

	const handleNext = (): void => {
		onChange('file', file);
		setStep(4);
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Детали задания
			</Typography>
			<CustomTextarea
				id='description'
				name='description'
				value={formData.description}
				label='Описание задачи'
				placeholder='Опишите детали задания'
				onChange={handleInputChange}
				className='textarea'
			/>
			<Typography variant='body1'>Добавить фото</Typography>
			<CustomDropzone setFile={setFile} openModal={openModal} />
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

export default Step4;
