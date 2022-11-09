import React from 'react';
import 'dayjs/locale/ru';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import { FormHelperText, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledLabel } from '../InputCustomized';

interface IProps {
	id: string;
	name?: string;
	label: string;
	placeholder?: string;
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
	placeholder,
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
			<LocalizationProvider adapterLocale='ru' dateAdapter={AdapterLuxon}>
				<StyledLabel htmlFor={id}>{label}</StyledLabel>
				<MobileDateTimePicker
					inputFormat='dd/MM/yyyy'
					value={value}
					onChange={handleChange}
					className={className}
					disableFuture
					renderInput={(params: TextFieldProps): JSX.Element => (
						<CustomTextField
							{...params}
							id={id}
							name={name}
							placeholder={placeholder}
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
