import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FileWithPath } from 'react-dropzone';
import { IExecutorData } from '../../Pages/RegisterExecutor';
import CustomButton from '../CustomButton/Index';
import CustomDropzone from '../Dropzone';

interface IProps {
	executorData: IExecutorData;
	onChange: (name: string, value: File[] | null) => void;
	setStep: (step: number) => void;
}

const RegStep2: React.FC<IProps> = ({ executorData, onChange, setStep }) => {
	const [photo, setPhoto] = useState<FileWithPath | null>(executorData.photo);
	const [photoWithDoc, setPhotoWithDoc] = useState<FileWithPath | null>(
		executorData.photo
	);

	const handleClear = (index: number): void => {
		let files = files?.map((el) => el);
		if (files?.length! > 1) {
			let removed = filesArr?.splice(index, 1);
			setFiles(filesArr as []);
		} else {
			setFiles([]);
		}
	};

	const handlePrev = (): void => {
		setStep(0);
		setPhoto(photo);
		setPhotoWithDoc(photoWithDoc);
	};

	const handleNext = (): void => {
		setStep(2);
	};

	return (
		<>
			{!photo ? (
				<>
					<Typography variant='body1'>Загрузите фото</Typography>
					<CustomDropzone setFiles={setPhoto} />
				</>
			) : (
				<img
					src={URL.createObjectURL(photo)}
					alt='Предпросмотр изображения'
					className='img-preview'
				/>
			)}
			{!photoWithDoc ? (
				<>
					<Typography variant='body1'>Загрузите фото с паспортом</Typography>
					<Typography>
						Это поможет получить значок Проверенного исолнителя
					</Typography>
					<CustomDropzone setFiles={setPhotoWithDoc} />
				</>
			) : (
				<img
					src={URL.createObjectURL(photoWithDoc)}
					alt='Предпросмотр изображения'
					className='img-preview'
				/>
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

export default RegStep2;
