import React from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { FormHelperText, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledLabel } from '../InputCustomized';

interface IProps {
	id: string;
	name?: string;
	label: string;
	onChange: (value: string | null) => void;
	value: string | null;
	className?: string;
	error?: string;
}

const DatePicker: React.FC<IProps> = ({
	id,
	name,
	value,
	label,
	onChange,
	className,
	error,
}) => {
	const handleChange = (newValue: Date | null): void => {
		onChange(newValue && newValue.toISOString());
	};

	const CustomTextField = styled(TextField)({
		backgroundColor: '#fff',
		'&.form__input': {
			'& .MuiOutlinedInput-root': {
				'& fieldset': {
					borderColor: '#595A94',
				},
			},
		},
		'& legend': {
			display: 'none',
		},
		'& fieldset': {
			top: 0,
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#B9BAD5',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#595A94',
			},
			'&.Mui-error fieldset': {
				borderColor: '#FB6E07',
			},
		},
	});

	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<StyledLabel htmlFor={id}>{label}</StyledLabel>
				<MobileDatePicker
					inputFormat='MM/dd/yyyy'
					value={value}
					name={name}
					onChange={handleChange}
					className={className}
					disableFuture
					renderInput={(params: TextFieldProps): JSX.Element => (
						<CustomTextField
							{...params}
							id='DoB'
							placeholder='Дата'
							error={!!error}
							className={className}
						/>
					)}
				/>
			</LocalizationProvider>
			<FormHelperText>{error}</FormHelperText>
		</>
	);
};

export default DatePicker;
