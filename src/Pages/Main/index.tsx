import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import './style.sass';
import CustomButton from '../../Components/CustomButton';

const Main: React.FC = () => {
	return (
		<Stack direction='column' alignItems='center' className='main'>
			<Typography component='h1' className='main__heading'>
				Мне надо
			</Typography>
			<Typography component='p' className='main__text'>
				Немного текста о том, какие мы классные, и чем можем быть полезны
			</Typography>

			<Box className='section'>
				<Typography className='section__heading' component='h2'>
					Как это работает?
				</Typography>
				<Stack direction='row' justifyContent='center' alignItems='center'>
					<Paper className='section__step step'>
						<Typography component='h3' className='step__heading'>
							Создайте задание
						</Typography>
						<Typography component='p'>Опишите вседетали</Typography>
					</Paper>
					<Paper className='section__step'>
						<Typography component='h3' className='step__heading'>
							Выберите исполнителя
						</Typography>
						<Typography component='p'>
							Получите отклики от исполнителей и выберите лучшего
						</Typography>
					</Paper>
					<Paper className='section__step'>
						<Typography component='h3' className='step__heading'>
							Оплатите по факту исполнения
						</Typography>
					</Paper>
				</Stack>
			</Box>
		</Stack>
	);
};

export default Main;
