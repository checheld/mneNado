import React, { ReactNode } from 'react';
import {
	FormHelperText,
	InputBase,
	InputLabel,
	TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export interface IInputAttributes {
	id?: string;
	name?: string;
	value: string;
	placeholder?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	label?: ReactNode;
	autoComplete?: string;
	className?: string;
	disabled?: boolean;
	type?: string;
}

export const StyledInput = styled(InputBase)(() => ({
	height: '48px',
	marginRight: 0,
	padding: '4px 16px',
	border: '1px solid rgb(4, 132, 175, 1)',
	backgroundColor: '#fff',
	borderRadius: '5px',
	color: '#1F3B54',
	'::placeholder': {
		color: '#B9BAD5',
	},
	'&.Mui-disabled': {
		borderColor: '#B9BAD4',
		backgroundColor: '#F3F4FA',
		'&:hover': {
			borderColor: '#B9BAD4',
		},
		'::placeholder': {
			color: '#B9BAD4',
		},
	},
	// '&:hover': {
	//   borderColor: theme.palette.primary.light,
	// },
	'&:focus': {
		borderColor: '#5EA7D3',
	},
	'&:focus-within': {
		border: '2px solid #5EA7D3',
		//borderColor: '#5EA7D3',
	},
	'&.Mui-error': {
		borderColor: '#d32f2f',
	},
	'&.form__input': {
		'& input:disabled': {
			color: '#B9BAD4',
		},
		// '&:hover': {
		//   borderColor: theme.palette.primary.light,
		// },
		'&:focus': {
			borderColor: '#595A94',
		},
		'&:focus-within': {
			borderColor: '#595A94',
		},
	},
}));

export const StyledLabel = styled(InputLabel)(() => ({
	fontSize: '16px',
	color: '#616162',
}));

const CustomInput = React.forwardRef<HTMLInputElement, IInputAttributes>(
	(
		{
			id,
			placeholder,
			onChange,
			value,
			label,
			error,
			name,
			className,
			disabled,
			type,
		},
		ref
	) => {
		return (
			<>
				<TextField
					id={id}
					name={name}
					label={label}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					error={!!error}
					inputRef={ref}
					autoComplete='off'
					className={className}
					disabled={disabled}
					type={type}
				></TextField>
				<FormHelperText className='error-text'>{error}</FormHelperText>
			</>
		);
	}
);

export default CustomInput;
