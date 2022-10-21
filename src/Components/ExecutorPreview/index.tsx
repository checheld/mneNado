import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import { Chip, Paper, Stack, Typography, Rating } from '@mui/material';
import CustomAvatar from '../CustomAvatar';
import Pricelist from '../Pricelist';
import './style.sass';

interface IProps {
	id: number | string;
	name: string;
	photo?: string;
	about: string;
	rating?: number;
	taskCategories: string[];
	pricelist: { service: string; price: string }[];
}

const ExecutorPreview: React.FC<IProps> = ({
	id,
	name,
	photo,
	about,
	rating,
	taskCategories,
	pricelist,
}) => {
	return (
		<Paper elevation={3} className='executor' sx={{ p: '3% 5%' }}>
			<Stack sx={{ mb: 2 }} direction='row' alignItems='center'>
				<CustomAvatar photo={photo} name={name} className='executor__avatar' />
				<Link to={`/executors/executor/${id}`} className='link-reset'>
					<Typography
						fontSize='24px'
						fontWeight='600'
						className='executor__name'
					>
						{name}
					</Typography>
				</Link>
			</Stack>
			<Rating name='executorRating' value={rating} precision={0.1} readOnly />
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
				<Stack spacing={2} direction='row' sx={{ mb: '30px' }}>
					{taskCategories.map((item) => (
						<Chip key={item} label={item} component='a' href='#' clickable />
					))}
				</Stack>
			</ul>
			<Pricelist pricelist={pricelist} />
			{/* work examples carousel */}
			{/* contact button */}
		</Paper>
	);
};

export default ExecutorPreview;
