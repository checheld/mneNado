import React from 'react';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.sass';

const RegistrationChoice: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		navigate(`/register/${e.currentTarget.name}`);
	};

	return (
		<Stack
			direction='column'
			justifyContent='center'
			alignItems='center'
			className='reg-choice'
			sx={{ height: '80vh' }}
		>
			<Stack direction='row'>
				<Button
					className='reg-choice__btn'
					variant='contained'
					name='client'
					onClick={handleClick}
				>
					Зарегистрироваться как Заказчик
				</Button>
				<Button
					className='reg-choice__btn'
					variant='contained'
					name='executor'
					onClick={handleClick}
				>
					Зарегистрироваться как Исполнитель
				</Button>
			</Stack>
		</Stack>
	);
};

export default RegistrationChoice;
