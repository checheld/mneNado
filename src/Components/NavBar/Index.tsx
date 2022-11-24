import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, List, ListItem, Typography } from '@mui/material';
import NavBarLink from './Components/NavBarLink';
// import Logo from '../../img/logo';
import './style.css';
import NavbarContainer from './Components/NavbarContainer';

const NavBar: React.FC = () => {
	const router = useNavigate();

	const links = [
		{ text: 'заказы', link: '/orders' },
		{ text: 'исполнители', link: '/executors' },
	];

	return (
        <NavbarContainer>
		{/* <AppBar position='fixed' className='appBarContainer'> */}
			<Box className='logoContainer'>
				{/* <Logo /> */}
				<Link to='/' className='link-reset'>
					<Typography className='appBarName'>MneNado</Typography>
				</Link>
			</Box>
			<List className='appBarList'>
				{links.map((x, i) => (
					<NavBarLink text={x.text} link={x.link} key={i} />
				))}
				<ListItem sx={{ padding: 0, ml: '30px' }}>
					<Button
						variant='outlined'
						className='loginButton'
						sx={{ mr: '20px' }}
						onClick={() => router('/login')}
					>
						Вход
					</Button>
				</ListItem>
				<ListItem>
					<Button
						variant='outlined'
						className='loginButton'
						onClick={() => router('/signup-choice')}
					>
						Регистрация
					</Button>
				</ListItem>
			</List>
		{/* </AppBar> */}
        </NavbarContainer>
	);
};
export default NavBar;

