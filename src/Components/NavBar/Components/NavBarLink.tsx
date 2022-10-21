import React from 'react';
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from '@mui/material';
import '../style.css';

interface ILinkProps {
    text: string,
    link: string
}

const NavBarLink: React.FC<ILinkProps> = ({ text, link }) => {

    return (
        <ListItem button className='linkContainer'>
            <Link to={link} className='link'>
                <ListItemText primary={text} />
            </Link>
        </ListItem>
    );
}
export default NavBarLink