import React from 'react';
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from '@mui/material';
import '../style.css';

interface ILinkProps {
    text: string,
    link: string
}

const FooterLink: React.FC<ILinkProps> = ({ text, link }) => {

    return (
        <ListItem button className='footerLinkContainer'>
            <Link to={link} className='footerLink'>
                <ListItemText primary={text} />
            </Link>
        </ListItem>
    );
}
export default FooterLink