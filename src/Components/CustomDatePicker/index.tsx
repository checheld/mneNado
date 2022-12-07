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
	disablePast?: boolean;
	disableFuture?: boolean;
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
			'& input': {
				padding: 0,
			},
		},
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
	disablePast,
	disableFuture,
}) => {
	const handleChange = (newValue: DateTime | null): void => {
		onChange(newValue && newValue.toISO());
	};

	return (
		<Stack direction='column' className={`datepicker-wrap ${id}`}>
			<LocalizationProvider adapterLocale='ru' dateAdapter={AdapterLuxon}>
				<Stack direction='column'>
					<DatePicker
						value={value}
						label={label}
						onChange={handleChange}
						className={className}
						renderInput={(params: TextFieldProps): JSX.Element => (
							<TextField
								{...params}
								id={id}
								name={name}
								placeholder='Дата'
								error={!!error}
								className={inputClassName}
								sx={{ width: '100%' }}
							/>
						)}
						disablePast={disablePast}
						disableFuture={disableFuture}
					/>
					<FormHelperText className='error-text'>{error}</FormHelperText>
				</Stack>
			</LocalizationProvider>
		</Stack>
	);
};

export default CustomDatePicker;
