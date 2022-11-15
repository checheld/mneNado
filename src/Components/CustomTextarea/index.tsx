import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { StyledLabel } from '../InputCustomized';
import { Box, FormHelperText, OutlinedInput, styled } from '@mui/material';

interface ITextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	id: string;
	name: string;
	value: string;
	label: string;
	placeholder: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	error?: string;
}

export const StyledTextarea = styled(OutlinedInput)(() => ({
	backgroundColor: '#fff',
	borderRadius: '5px',
	color: '#1F3B54',
	'::placeholder': {
		color: '#B9BAD5',
	},
	'&.Mui-error': {
		'& fieldset': {
			borderColor: '#FB6E07 !important',
		},
	},
	'&.form__input': {
		'& input:disabled': {
			color: '#B9BAD4',
		},
		'&:focus': {
			borderColor: '#595A94',
		},
		'&:focus-within': {
			borderColor: '#595A94',
		},
	},
}));

const CustomTextarea: React.FC<ITextareaProps> = ({
	id,
	label,
	placeholder,
	value,
	name,
	onChange,
	error,
	...props
}) => {
	return (
		<>
			<StyledLabel htmlFor={id}>{label}</StyledLabel>
			<StyledTextarea
				placeholder={placeholder}
				sx={{ height: '100px', mb: '20px' }}
				name={name}
				// inputProps={{ maxLength: inputLength }}
				id={id}
				// tabIndex={index}
				value={value}
				onChange={onChange}
				multiline
				rows={4}
				error={!!error}
			/>
			<FormHelperText
				sx={{
					height: '20px',
					marginTop: -2,
					marginBottom: 3,
					color: '#FB6E07',
				}}
			>
				{error}
			</FormHelperText>
		</>
	);
};

export default CustomTextarea;
