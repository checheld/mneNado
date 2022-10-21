import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import './style.sass';

const TaskCard: React.FC = () => {
	return (
		<Paper elevation={3} sx={{ p: '3% 5%' }} className='taskCardContainer'>
			<Box className='taskCardContainerLeft'>
				<Typography className='taskCardTitle'>
					Сиделка в мед учреждение
				</Typography>
				<Typography className='taskCardP'>улица Щепкина, Москва</Typography>
				<Typography className='taskCardP'>Начать 20 октября, 11:50</Typography>
			</Box>
			<Box>
				<Typography className='taskCardPrice'>65 000 p</Typography>
				<Typography className='taskCardCustomer'>ВкусВилл</Typography>
				<Typography className='taskCardRewiews'>Нет отзывов</Typography>
			</Box>
		</Paper>
	);
};

export default TaskCard;
