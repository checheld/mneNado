import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
	text: string;
	onClick: () => void;
}

const CustomButton: React.FC<IButtonProps> = ({ text, onClick, ...props }) => {
	return (
		<Button variant='contained' onClick={onClick} {...props}>
			{text}
		</Button>
	);
};
export default CustomButton;
