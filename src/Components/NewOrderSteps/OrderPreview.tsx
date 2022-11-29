import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import { formatDate, formatMoney } from '../../utils/functions';
import './style.sass';

interface IProps {
	formData: IFormData;
	setStep: (step: number) => void;
	paymentMethod: string;
}

enum paymentTypes {
	direct = 'напрямую исполнителю',
	application = 'через приложение',
}

const TaskPreview: React.FC<IProps> = ({
	formData,
	setStep,
	paymentMethod,
}) => {
	const paymentType = paymentTypes[paymentMethod as keyof typeof paymentTypes];

	const handlePrev = (): void => {
		setStep(5);
	};
	const handleSubmit = (): void => {
		console.log('success');
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Предпросмотр задания
			</Typography>
			<Box className='preview-wrap'>
				<Typography
					variant='h5'
					className='task-preview__text'
					sx={{ fontWeight: 700 }}
				>
					{formData.task_name}
				</Typography>
				{!formData.isOnline ? (
					<Typography className='task-preview__text'>
						<strong>Выполнить по адресу:</strong> {formData.address}
					</Typography>
				) : (
					<Typography className='task-preview__text'>
						Выполнить задание онлайн
					</Typography>
				)}
				{/* date */}
				{formData.start_date ? (
					<Typography className='task-preview__text'>
						<strong>Начать:</strong>{' '}
						{formatDate(formData.start_date, 'dd LLL yyyy')}{' '}
						{formData.start_time
							? `, ${formatDate(formData.start_time, 'HH:mm')}`
							: null}
					</Typography>
				) : null}
				{formData.end_date ? (
					<Typography className='task-preview__text'>
						<strong>Завершить:</strong>{' '}
						{formatDate(formData.end_date, 'dd LLL yyyy')}{' '}
						{formData.end_time
							? `, ${formatDate(formData.end_time, 'HH:mm')}`
							: null}
					</Typography>
				) : null}
			</Box>
			{/* budget */}
			<Box className='content-wrap'>
				{Array.isArray(formData.budget) ? (
					<Typography className='task-preview__text'>
						Бюджет от {formData.budget[0]}₽ до {formData.budget[1]}₽
					</Typography>
				) : (
					<Typography className='task-preview__text'>
						<strong>Стоимость:</strong> {formatMoney(Number(formData.budget))}₽
					</Typography>
				)}
				<Typography className='task-preview__text'>
					Оплата {paymentType}
				</Typography>
			</Box>
			<Box className='content-wrap'>
				<Typography className='task-preview__text'>
					<strong>Подробное описание задания: </strong>
					{formData.description}
				</Typography>
				<Stack
					className='file-container'
					direction='row'
					alignItems='center'
					sx={{ mb: '20px' }}
				>
					{formData.files?.map((file, index) => (
						<div className='content-container'>
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
						</div>
					))}
				</Stack>
			</Box>
			<Box className='btn-container' sx={{ mt: '30px' }}>
				<CustomButton
					text='Редактировать'
					onClick={handlePrev}
					variant='outlined'
					sx={{ color: '#CBD8DD !important' }}
					className='step-btn back-btn'
				/>
				<CustomButton
					text='Подтвердить'
					onClick={handleSubmit}
					className='step-btn'
				/>
			</Box>
		</>
	);
};

export default TaskPreview;
