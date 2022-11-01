import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, List, ListItem, Typography } from '@mui/material';
import FooterLink from './Components/FooterLink';
import './style.css';

const Footer: React.FC = () => {
    const router = useNavigate();

    const links = [
        { text: 'FAQ', link: '/' },
        { text: 'Контакты', link: '/' },
        { text: 'Служба поддержки', link: '/' },
    ];

    return (
        <Box className='footerContainer'>
            <Box className='logoFooterContainer'>
                <Link to='/' className='link-reset'>
                    <Typography className='footerName'>MneNado</Typography>
                </Link>
            </Box>
            <List className='appBarList'>
                {links.map((x, i) => (
                    <FooterLink text={x.text} link={x.link} key={i} />
                ))}
            </List>
        </Box>
    );
};
export default Footer;
