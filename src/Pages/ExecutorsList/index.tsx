import React from 'react';
import { List, ListItem } from '@mui/material';
import PerformerPreview from '../../Components/ExecutorPreview';
import { executors } from '../../dummyData';
import './style.sass';

const ExecutorsList: React.FC = () => {
	return (
		<List sx={{ pt: 10 }} className='executors'>
			{executors.length > 0 &&
				executors.map((person) => (
					<ListItem className='executors__item' key={person.id}>
						<PerformerPreview
							id={person.id}
							rating={person.rating}
							name={person.name}
							photo={person.photo}
							about={person.about}
							taskCategories={person.taskCategories}
							pricelist={person.pricelist}
						/>
					</ListItem>
				))}
		</List>
	);
};

export default ExecutorsList;
