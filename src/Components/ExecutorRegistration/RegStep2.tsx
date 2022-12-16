import React, { useState } from 'react';
import { FileWithPath } from 'react-dropzone';
import { Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IExecutorData } from '../../Pages/RegisterExecutor';
import CustomButton from '../CustomButton/Index';
import CustomDropzone from '../Dropzone';
import { Photo } from '@mui/icons-material';

interface IProps {
	executorData: IExecutorData;
	onChange: any;
	setStep: (step: number) => void;
}

const RegStep2: React.FC<IProps> = ({ executorData, onChange, setStep }) => {
	const [photo, setPhoto] = useState<FileWithPath[] | null>(executorData.photo);
	const [photoWithDoc, setPhotoWithDoc] = useState<FileWithPath[] | null>(
		executorData.photo_with_doc
	);

	const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.currentTarget.name === 'photo' ? setPhoto(null) : setPhotoWithDoc(null);
	};

	const handleSetPhoto = (file: any) => {
		setPhoto(file);
		console.log('e', file);
		onChange('photo', file);
	};

	const handleSetPhotoWithDoc = (file: any) => {
		setPhotoWithDoc(file);
		console.log('e', file);
		onChange('photo_with_doc', file);
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
			{!photo?.length ? (
				<>
					<Typography variant='h5' component='p'>
						Добавить фото
					</Typography>
					<CustomDropzone setFiles={handleSetPhoto} id='photo' />
				</>
			) : (
				<>
					<img
						className='img-preview'
						src={URL.createObjectURL(photo[0])}
						alt='Предпросмотр фото пользователя'
					/>
					<IconButton
						className='preview-btn'
						name='photo'
						onClick={handleClear}
					>
						<DeleteIcon />
					</IconButton>
				</>
			)}
			{!photoWithDoc?.length ? (
				<>
					<Typography variant='h5' component='p'>
						Добавить фото с удостоверением личности
					</Typography>
					<Typography variant='body1'>
						добавление фото с удостоверением личности позволяет получить статус
						проверенного исполнителя
					</Typography>
					<CustomDropzone
						setFiles={handleSetPhotoWithDoc}
						id='photo_with_doc'
					/>
				</>
			) : (
				<>
					<img
						className='image-preview'
						src={URL.createObjectURL(photoWithDoc[0])}
						alt='Предпросмотр фото с документом'
					/>
					<IconButton
						className='preview-btn'
						name='photoWhithDoc'
						onClick={handleClear}
					>
						<DeleteIcon />
					</IconButton>
				</>
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
