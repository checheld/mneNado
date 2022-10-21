import React from 'react';
import {
	Box,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableRow,
} from '@mui/material';

interface IProps {
	pricelist: { service: string; price: string }[];
}

const Pricelist: React.FC<IProps> = ({ pricelist }) => {
	return (
		<Box>
			<Typography variant='h6' component='h3'>
				Цены
			</Typography>
			<Table sx={{ minWidth: 500 }} aria-label='custom pagination table'>
				<TableBody>
					{pricelist.map((row) => (
						<TableRow key={row.service}>
							<TableCell component='th' scope='row'>
								{row.service}
							</TableCell>
							<TableCell style={{ width: 160 }} align='right'>
								{row.price}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
};

export default Pricelist;
