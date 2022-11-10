import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';

interface ISelectProps extends SelectProps {
	label?: string;
	value: string;
	values: any[];
	menuItemKey: number | string;
	menuItemValue: string;
	formControlClass?: string;
	onChange: (event: SelectChangeEvent<string | unknown>) => void;
}

const CustomSelect: React.FC<ISelectProps> = ({
	label,
	value,
	values,
	menuItemKey,
	menuItemValue,
	formControlClass,
	onChange,
	...props
}) => {
	return (
		<FormControl className={formControlClass}>
			<InputLabel id='select-label'>{label}</InputLabel>
			<Select
				labelId='select-label'
				value={value}
				label={label}
				onChange={onChange}
				{...props}
			>
				{values.map((item) => (
					<MenuItem
						value={item[menuItemValue]}
						key={item[menuItemKey]}
						className='select__item'
					>
						{item[menuItemValue]}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default CustomSelect;
