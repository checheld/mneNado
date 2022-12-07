import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material';

interface IPasswordInput {
	id: string;
	name?: string;
	value: string;
	error?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
	className?: string;
	placeholder: string;
}

interface PasswordState {
	showPassword: boolean;
}

const PasswordInput: React.FC<IPasswordInput> = ({
	id,
	value,
	error,
	onChange,
	name,
	label,
	className,
	placeholder,
}) => {
	const [visibility, setVisibility] = React.useState<PasswordState>({
		showPassword: false,
	});

	const handleClickShowPassword = (): void => {
		setVisibility({
			...visibility,
			showPassword: !visibility.showPassword,
		});
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	): void => {
		event.preventDefault();
	};

	return (
		<>
			<FormControl variant='outlined'>
				<InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
				<OutlinedInput
					id={id}
					name={name}
					placeholder={placeholder}
					type={visibility.showPassword ? 'text' : 'password'}
					value={value}
					error={!!error}
					onChange={onChange}
					className={className}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge='end'
							>
								{visibility.showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label={label}
				/>
			</FormControl>
			<FormHelperText className='error-text'>{error}</FormHelperText>
		</>
	);
};

export default PasswordInput;
