import React, { ReactNode } from 'react';
import { FormHelperText, InputBase, InputLabel } from '@mui/material';
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
		borderColor: '#FB6E07',
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

const InputCustomized = React.forwardRef<HTMLInputElement, IInputAttributes>(
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
				<StyledLabel htmlFor={id} disabled={disabled}>
					{label}
				</StyledLabel>
				<StyledInput
					id={id}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					error={!!error}
					inputRef={ref}
					autoComplete='off'
					className={className}
					disabled={disabled}
					type={type}
				></StyledInput>
				<FormHelperText sx={{ marginBottom: 1, color: '#FB6E07' }}>
					{error}
				</FormHelperText>
			</>
		);
	}
);

export default InputCustomized;
