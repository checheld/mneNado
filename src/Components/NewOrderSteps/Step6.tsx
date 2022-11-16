import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import { formatDate, formatMoney } from '../../utils/functions';

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
		setStep(4);
	};
	const handleSubmit = (): void => {
		console.log('success');
	};
	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Предпросмотр задания
			</Typography>
			<Box>
				<Typography variant='h6'>{formData.task_name}</Typography>
				{!formData.isOnline ? (
					<Typography>Выполнить по адресу: {formData.address}</Typography>
				) : (
					<Typography>Выполнить задание онлайн</Typography>
				)}
				{/* date */}
				{formData.start_date ? (
					<Typography>
						Начать: {formatDate(formData.start_date, 'dd LLL yyyy')},{' '}
						{formData.start_time
							? `${formatDate(formData.start_time, 'HH:mm')}`
							: null}
					</Typography>
				) : null}
				{formData.end_date ? (
					<Typography>
						Завершить {formatDate(formData.end_date, 'dd LLL yyyy')},{' '}
						{formData.end_time
							? `${formatDate(formData.end_time, 'HH:mm')}`
							: null}
					</Typography>
				) : null}
			</Box>
			{/* budget */}
			<Box>
				{Array.isArray(formData.budget) ? (
					<Typography>
						Бюджет от {formData.budget[0]}₽ до {formData.budget[1]}₽
					</Typography>
				) : (
					<Typography>
						Стоимость {formatMoney(Number(formData.budget))}₽
					</Typography>
				)}
				<Typography>Оплата {paymentType}</Typography>
				<Typography>{formData.description}</Typography>
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
