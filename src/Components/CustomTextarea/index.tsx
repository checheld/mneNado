import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { StyledLabel } from '../InputCustomized';

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
			<TextareaAutosize
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				{...props}
			/>
		</>
	);
};

export default CustomTextarea;
