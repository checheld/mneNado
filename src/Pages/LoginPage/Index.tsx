import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import './style.css';
import CustomButton from '../../Components/CustomButton/Index';

const LoginPage: React.FC = () => {
	const router = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [check, setCheck] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleLogIn = () => {
		//dispatch({ type: loginActions.LOGIN_REQUEST, payload: { 'email': email, 'password': password } });
		setEmail('');
		setPassword('');
	};

	const handleChangeEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = ev;
		setEmail(value);
	};

	const handleChangePassword = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = ev;
		setPassword(value);
	};

	useEffect(() => {
		setIsError(false);
		(email === '' || password === '') && setIsError(true);
	}, [email, password]);

	return (
		<Box className='loginFormContainer'>
			<Typography className='actionName'>Войти</Typography>
			{/* <CustomInput
				item={email}
				onChange={handleChangeEmail}
				check={check}
				placeholder={'Введите ваш email'}
				label={'Email'}
			/>
			<CustomInput
				item={password}
				onChange={handleChangePassword}
				check={check}
				placeholder={'Введите ваш пароль'}
				label={'Пароль'}
			/> */}
			<Typography
				className='forgotPasswordLink'
				onClick={() => router('/forgotpassword')}
			>
				Забыли пароль?
			</Typography>
			<CustomButton
				text={'Продолжить'}
				onClick={() => {
					if (isError) setCheck(true);
					else handleLogIn();
				}}
			/>
			<Typography className='signUpLinkThin' onClick={() => router('/signup')}>
				Нет аккаунта?<span className='signUpLinkBold'>Зарегестрироваться</span>
			</Typography>
		</Box>
	);
};
export default LoginPage;
