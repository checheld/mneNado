import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import { Chip, Paper, Stack, Typography } from '@mui/material';
import CustomAvatar from '../CustomAvatar';
import './style.sass';

interface IProps {
	name: string;
	photo?: string;
	about: string;
	taskCategories: string[];
}

const ExecutorPreview: React.FC<IProps> = ({
	name,
	photo,
	about,
	taskCategories,
}) => {
	return (
		<Paper elevation={3} className='executor' sx={{ p: '30px 50px' }}>
			<Stack sx={{ mb: 4 }} direction='row' alignItems='center'>
				<CustomAvatar photo={photo} name={name} className='executor__avatar' />
				<Link to='' className='link-reset'>
					<Typography
						fontSize='24px'
						fontWeight='600'
						className='executor__name'
					>
						{name}
					</Typography>
				</Link>
			</Stack>
			{/* make this block collapsible */}
			<ShowMoreText
				lines={3}
				more='ещё'
				less='скрыть'
				anchorClass='show-more'
				expanded={false}
				width={0}
				className='executor__description'
			>
				{about}
			</ShowMoreText>

			<Typography sx={{ mb: '20px', fontSize: '20px', fontWeight: '500' }}>
				Категории заданий
			</Typography>
			<ul className='task-categiries list-reset'>
				<Stack spacing={2} direction='row'>
					{taskCategories.map((item) => (
						<Chip key={item} label={item} component='a' href='#' clickable />
					))}
				</Stack>
			</ul>
			{/* star rating */}
			{/* work examples carousel */}
			{/* price list */}
			{/* contact button */}
		</Paper>
	);
};

export default ExecutorPreview;
