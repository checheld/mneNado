import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, List, ListItem, Typography } from '@mui/material';
import NavBarLink from './Components/NavBarLink';
// import Logo from '../../img/logo';
import './style.css';

const NavBar: React.FC = () => {
	const router = useNavigate();

	const links = [
		{ text: 'заказы', link: '/orders' },
		{ text: 'исполнители', link: '/executors' },
	];

	return (
		<AppBar position='static' className='appBarContainer'>
			<Box className='logoContainer'>
				{/* <Logo /> */}
				<Typography className='appBarName'>MneNado</Typography>
			</Box>
			<List className='appBarList'>
				{links.map((x, i) => (
					<NavBarLink text={x.text} link={x.link} key={i} />
				))}
				<ListItem sx={{ padding: 0 }}>
					<Button
						variant='outlined'
						className='loginButton'
						sx={{ mr: '20px' }}
						onClick={() => router('/login')}
					>
						Войти
					</Button>
				</ListItem>
				<ListItem>
					<Button
						variant='outlined'
						className='loginButton'
						onClick={() => router('/signup-choice')}
					>
						Зарегистрироваться
					</Button>
				</ListItem>
			</List>
		</AppBar>
	);
};
export default NavBar;
