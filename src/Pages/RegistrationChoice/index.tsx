import { Button, Stack } from '@mui/material';
import React from 'react';
import './style.sass';

const RegistrationChoice: React.FC = () => {
	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			className='reg-choice'
			sx={{ height: '80vh' }}
		>
			<Stack direction='row'>
				<Button className='reg-choice__btn' variant='contained'>
					Зарегистрироваться как Заказчик
				</Button>
				<Button className='reg-choice__btn' variant='contained'>
					Зарегистрироваться как Исполнитель
				</Button>
			</Stack>
		</Stack>
	);
};

export default RegistrationChoice;
