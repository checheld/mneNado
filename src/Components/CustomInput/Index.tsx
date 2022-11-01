import React, { ChangeEvent, useMemo, useState } from 'react';
import {
	Box,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	styled,
	TextField,
	Typography,
	useFormControl,
} from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './style.css';
// import Eye from '../../img/eye';
// import StrikethroughEye from '../../img/strikethroughEye';

export interface IInputProps {
	name?: string;
	item: string;
	onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
	check: boolean;
	placeholder: string;
	label: string;
}

interface SettingsMenuProps {
	el: string;
}

export const StyledLabel = styled(InputLabel)(() => ({
	fontSize: '16px',
	color: '#595A94',
}));

const CustomInput: React.FC<IInputProps> = ({
	item,
	name,
	onChange,
	check,
	placeholder,
	label,
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	function MyFormHelperText({ el }: SettingsMenuProps) {
		const { focused } = useFormControl() || {};

		const helperText: string = useMemo(() => {
			if (!el && check) {
				return 'Введите значение';
			}
			return '';
		}, [focused]);

		return <FormHelperText sx={{ color: 'red' }}>{helperText}</FormHelperText>;
	}

	return (
		<Box className='inputContainer'>
			<Typography className='label'>{label}</Typography>
			<FormControl>
				{label === 'Пароль' ? (
					<TextField
						variant='outlined'
						placeholder={placeholder}
						type={showPassword ? 'text' : 'password'}
						value={item}
						onChange={onChange}
						error={!item && check}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										aria-label='toggle password visibility'
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
									>
										{/* {showPassword ? <StrikethroughEye /> : <Eye />} */}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				) : (
					<TextField
						variant='outlined'
						placeholder={placeholder}
						value={item}
						onChange={onChange}
						error={!item && check}
					/>
				)}
				<MyFormHelperText el={item} />
			</FormControl>
		</Box>
	);
};
export default CustomInput;
