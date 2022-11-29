import React, { FC, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import CustomTextarea from '../CustomTextarea';
import CustomDropzone from '../Dropzone';
import { FileWithPath } from 'react-dropzone';
import { validateField } from '../../utils/validation';
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
	description: string;
}

const initialErrors: IErrorsData = {
	description: '',
};

const Step5: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [files, setFiles] = useState<FileWithPath[] | null>(formData.files);
	const [error, setError] = useState(initialErrors);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		onChange(e.target.name, e.target.value);
		setError({ ...error, description: '' });
	};

	const validateInput = (): boolean => {
		const descriptionError = validateField(formData.description);
		if (descriptionError) setError({ description: descriptionError });
		return !descriptionError;
	};

	const handleClear = (index: number): void => {
		let filesArr = files?.map((el) => el);
		if (files?.length! > 1) {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			let removed = filesArr?.splice(index, 1);
			setFiles(filesArr as []);
		} else {
			setFiles([]);
		}
	};

	const handlePrev = (): void => {
		setStep(3);
		setFiles(files);
	};

	const handleNext = (): void => {
		if (validateInput()) {
			onChange('files', files);
			setStep(5);
		}
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
				error={error.description}
			/>
			{!files?.length ? (
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
							{file.type.includes('image') ? (
								<img
									src={URL.createObjectURL(file)}
									alt='Предпросмотр изображения'
									className='img-preview'
								/>
							) : (
								<Stack direction='row' alignItems='center'>
									<PictureAsPdfIcon />
									<Typography component='p'>{file.name}</Typography>
								</Stack>
							)}
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

export default Step5;
