import React from 'react';
import { Button } from '@mui/material';

interface IButtonProps {
	text: string;
	onClick: () => void;
}

const CustomButton: React.FC<IButtonProps> = ({ text, onClick }) => {
	return (
		<Button variant='contained' onClick={onClick}>
			{text}
		</Button>
	);
};
export default CustomButton;
