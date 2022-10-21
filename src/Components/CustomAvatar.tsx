import React from 'react';
import { Avatar } from '@mui/material';
import { getInitials } from '../utils/functions';

interface IProps {
	photo?: string;
	name: string;
	className?: string;
}

const randomColor = () => {
	let hex = Math.floor(Math.random() * 0xffffff);
	let color = '#' + hex.toString(16);

	return color;
};

const CustomAvatar: React.FC<IProps> = ({ name, photo, className }) => {
	const initials = getInitials(name);
	return (
		<>
			{typeof photo !== 'undefined' ? (
				<Avatar alt={name} src={photo} className={className} />
			) : (
				<Avatar
					alt={name}
					className={className}
					sx={{ backgroundColor: randomColor() }}
				>
					{initials}
				</Avatar>
			)}
		</>
	);
};

export default CustomAvatar;
