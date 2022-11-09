import React from 'react';
import 'dayjs/locale/ru';
import { DateTime } from 'luxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { TimePicker } from '@mui/x-date-pickers';
import { FormHelperText, Stack, TextFieldProps } from '@mui/material';
import { StyledLabel } from '../InputCustomized';
import { CustomTextField } from '../CustomDatePicker';

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

const CustomTimePicker: React.FC<IProps> = ({
	id,
	name,
	value,
	label,
	placeholder,
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
					<TimePicker
						value={value}
						onChange={handleChange}
						className={className}
						ampm={false}
						renderInput={(params: TextFieldProps): JSX.Element => (
							<CustomTextField
								{...params}
								id={id}
								name={name}
								placeholder='Время'
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

export default CustomTimePicker;
