import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Chip, Rating, Stack, Typography } from '@mui/material';
import CustomInput from '../../Components/CustomInput/Index';
import CustomAvatar from '../../Components/CustomAvatar';
import Pricelist from '../../Components/Pricelist';
import { executors } from '../../dummyData';
import './style.css';

const ExecutorPage: React.FC = () => {
	let params = useParams<{ id?: string }>();

	const currentExecutor = executors.filter((el) => el.id === params.id)[0];
	return (
		<>
			{currentExecutor && (
				<Box sx={{ width: '70vw', p: '50px' }}>
					<Stack sx={{ mb: 2 }} direction='row' alignItems='center'>
						<CustomAvatar
							photo={currentExecutor.photo}
							name={currentExecutor.name}
							className='executor__avatar'
						/>

						<Typography
							fontSize='24px'
							fontWeight='600'
							className='executor__name'
						>
							{currentExecutor.name}
						</Typography>
					</Stack>
					<Rating
						name='executorRating'
						value={currentExecutor.rating}
						precision={0.1}
						readOnly
					/>
					<div className='executor__description'>{currentExecutor.about}</div>

					<Typography sx={{ mb: '20px', fontSize: '20px', fontWeight: '500' }}>
						Категории заданий
					</Typography>
					<ul className='task-categiries list-reset'>
						<Stack spacing={2} direction='row' sx={{ mb: '30px' }}>
							{currentExecutor.taskCategories.map((item) => (
								<Chip
									key={item}
									label={item}
									component='a'
									href='#'
									clickable
								/>
							))}
						</Stack>
					</ul>
					<Pricelist pricelist={currentExecutor.pricelist} />
				</Box>
			)}
		</>
	);
};
export default ExecutorPage;
