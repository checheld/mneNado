import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { StyledLabel } from '../InputCustomized';
import { Box, OutlinedInput } from '@mui/material';

interface ITextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	id: string;
	name: string;
	value: string;
	label: string;
	placeholder: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextarea: React.FC<ITextareaProps> = ({
	id,
	label,
	placeholder,
	value,
	name,
	onChange,
	...props
}) => {
	return (
		<>
			<StyledLabel htmlFor={id}>{label}</StyledLabel>
			<OutlinedInput placeholder={placeholder}
			sx={{height: '100px', mb: '20px'}}
				name={name}
				// inputProps={{ maxLength: inputLength }}
				id={id}
				// tabIndex={index}
				value={value}
				// error={!item && check && index === 0}
				onChange={onChange}
				multiline
				rows={4}
          />
		</>
	);
};

export default CustomTextarea;
