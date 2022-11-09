// import React from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
// import { FormHelperText, TextField, TextFieldProps } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { StyledLabel } from '../InputCustomized';

// const DatePicker: React.FC<IProps> = (props) => {
// 	const handleChange = (newValue: Date | null): void => {
// 		props.onChange(newValue && newValue.toISOString());
// 	};

// 	const CustomTextField = styled(TextField)({
// 		backgroundColor: '#fff',
// 		'&.form__input': {
// 			'& .MuiOutlinedInput-root': {
// 				'& fieldset': {
// 					borderColor: '#595A94',
// 				},
// 			},
// 		},
// 		'& legend': {
// 			display: 'none',
// 		},
// 		'& fieldset': {
// 			top: 0,
// 		},
// 		'& .MuiOutlinedInput-root': {
// 			'& fieldset': {
// 				borderColor: '#B9BAD5',
// 			},
// 			'&.Mui-focused fieldset': {
// 				borderColor: '#595A94',
// 			},
// 			'&.Mui-error fieldset': {
// 				borderColor: '#FB6E07',
// 			},
// 		},
// 	});

// 	return (
// 		<>
// 			<LocalizationProvider dateAdapter={AdapterDateFns}>
// 				<StyledLabel htmlFor='DoB'>Date of birth</StyledLabel>
// 				<MobileDatePicker
// 					inputFormat='MM/dd/yyyy'
// 					value={props.value}
// 					onChange={handleChange}
// 					className={props.className}
// 					disableFuture
// 					renderInput={(params: TextFieldProps): JSX.Element => (
// 						<CustomTextField
// 							{...params}
// 							id='DoB'
// 							placeholder='MM/DD/YYYY'
// 							error={!!props.error}
// 							className={props.className}
// 						/>
// 					)}
// 				/>
// 			</LocalizationProvider>
// 			<FormHelperText>{props.error}</FormHelperText>
// 		</>
// 	);
// };

// export default DatePicker;
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import 'dayjs/locale/ar-sa';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

interface IProps {
	onChange: (value: string | null) => void;
	value: string | null;
	className?: string;
	error?: string;
}

const NewDatePicker: React.FC<IProps> = (props) => {
	const handleChange = (newValue: Date | null): void => {
		props.onChange(newValue && newValue.toISOString());
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ru'>
			<DateTimePicker
				value={props.value}
				onChange={handleChange}
				renderInput={(params: TextFieldProps): JSX.Element => (
					<TextField {...params} />
				)}
				ampm={false}
			/>
		</LocalizationProvider>
	);
};

export default NewDatePicker;
