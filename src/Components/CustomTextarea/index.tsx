import * as React from 'react';
import { StyledLabel } from '../CustomInput';
import {
	TextField,
	FormHelperText,
	OutlinedInput,
	styled,
} from '@mui/material';

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
			borderColor: '#d32f2f !important',
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
			<TextField
				placeholder={placeholder}
				sx={{ mb: '20px', pt: 1 }}
				name={name}
				id={id}
				label={label}
				value={value}
				onChange={onChange}
				multiline
				error={!!error}
				rows={5}
			/>
			<FormHelperText className='error-text'>{error}</FormHelperText>
		</>
	);
};

export default CustomTextarea;
