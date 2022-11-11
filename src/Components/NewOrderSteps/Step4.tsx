import React, { FC, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import CustomTextarea from '../CustomTextarea';
import CustomDropzone from '../Dropzone';
import { FileWithPath } from 'react-dropzone';
import './style.sass';

interface IProps {
	formData: IFormData;
	onChange: (
		name: string,
		value: string | boolean | FileWithPath[] | null
	) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	description: '';
}

const initialErrors: IErrorsData = {
	description: '',
};

const Step4: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [files, setFiles] = useState<FileWithPath[] | null>(formData.files);
	const [errors, setErrors] = useState(initialErrors);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleClear = (index: number): void => {
		const newFiles = files?.splice(index, 1);
		setFiles(newFiles!);
	};

	const handlePrev = (): void => {
		setStep(2);
		setFiles(files);
	};

	const handleNext = (): void => {
		onChange('files', files);
		console.log('files', files);
		setStep(4);
	};

	files?.map((file) => console.log('first', URL.createObjectURL(file)));

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
			{!files ? (
				<>
					<Typography variant='body1'>Добавить файлы</Typography>
					<CustomDropzone setFiles={setFiles} />
				</>
			) : (
				<Stack
					className='file-container'
					direction='row'
					alignItems='center'
					sx={{ mb: '20px' }}
				>
					{files.map((file, index) => (
						<div className='preview-container'>
							<img
								src={URL.createObjectURL(file)}
								alt='Предпросмотр изображения'
								className='img-preview'
							/>
							<IconButton
								className='preview-btn'
								onClick={() => handleClear(index)}
							>
								<DeleteIcon />
							</IconButton>
						</div>
					))}
				</Stack>
			)}

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
