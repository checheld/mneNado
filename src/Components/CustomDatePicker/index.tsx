import React from 'react';
import 'dayjs/locale/ru';
import { DateTime } from 'luxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DatePicker } from '@mui/x-date-pickers';
import {
	FormHelperText,
	TextField,
	TextFieldProps,
	Stack,
} from '@mui/material';
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
	inputClassName?: string;
	error?: string;
}

export const CustomTextField = styled(TextField)({
	backgroundColor: '#fff',
	border: '1px solid rgb(4, 132, 175, 1)',
	padding: '4px 16px',
	width: '100%',
	borderRadius: '5px',
	'&.form__input': {
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				border: 'none',
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
			border: 'none',
		},
	},
});

const CustomDatePicker: React.FC<IProps> = ({
	id,
	name,
	value,
	label,
	onChange,
	className,
	inputClassName,
	error,
}) => {
	const handleChange = (newValue: DateTime | null): void => {
		onChange(newValue && newValue.toISO());
	};

	return (
		<>
			<LocalizationProvider adapterLocale='ru' dateAdapter={AdapterLuxon}>
				<Stack direction='column'>
					<StyledLabel htmlFor={id}>{label}</StyledLabel>
					<DatePicker
						value={value}
						onChange={handleChange}
						className={className}
						renderInput={(params: TextFieldProps): JSX.Element => (
							<CustomTextField
								{...params}
								id={id}
								name={name}
								placeholder='Дата'
								error={!!error}
								className={inputClassName}
							/>
						)}
					/>
				</Stack>
			</LocalizationProvider>
			<FormHelperText>{error}</FormHelperText>
		</>
	);
};

export default CustomDatePicker;
