import React from 'react';
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	FormHelperText,
} from '@mui/material';
import './style.sass';

interface IProps {
	id: string;
	name: string;
	label: string;
	value: string;
	options: { optValue: string; optLabel: string }[];
	className?: string;
	ariaLabel?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadiogroup: React.FC<IProps> = ({ ...props }) => {
	return (
		<FormControl>
			<FormLabel id={props.id}>{props.label}</FormLabel>
			<RadioGroup
				aria-labelledby={props.ariaLabel}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			>
				{props.options.map((option) => (
					<FormControlLabel
						value={option.optValue}
						control={<Radio sx={{ color: '#6AC2F1', p: '0 9px' }} />}
						label={option.optLabel}
					/>
				))}
			</RadioGroup>
			<FormHelperText></FormHelperText>
		</FormControl>
	);
};

export default CustomRadiogroup;
