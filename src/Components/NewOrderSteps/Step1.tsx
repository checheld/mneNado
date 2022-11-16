import React, { useState, useEffect } from 'react';
import {
	Box,
	FormControlLabel,
	FormHelperText,
	Typography,
} from '@mui/material';
import {
	AddressSuggestions,
	DaDataAddress,
	DaDataSuggestion,
} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import CustomButton from '../CustomButton/Index';
import CustomCheckbox from '../CustomCheckbox';
import { StyledInput, StyledLabel } from '../InputCustomized';
import { IFormData } from '../../Pages/NewOrder';
import './style.sass';
import { validateAddress } from '../../utils/validation';

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | boolean) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	address: string;
}

const initialErrors: IErrorsData = {
	address: '',
};

const initialCoords = [47.52, 41.11];

const Step1: React.FC<IProps> = ({ formData, onChange, setStep }) => {
	const suggestionsRef = React.useRef<AddressSuggestions>(null);
	const [value, setValue] = useState<
		DaDataSuggestion<DaDataAddress> | undefined
	>();
	const [coords, setCoords] = useState<number[]>(initialCoords);
	const [errors, setErrors] = useState<IErrorsData>(initialErrors);
	const [errorClass, setErrorClass] = useState('');

	const handleInputChange = (
		e: DaDataSuggestion<DaDataAddress> | undefined
	) => {
		onChange('address', e!.value);
		console.log('e.value', e);
		let newCoords = [];
		newCoords.push(Number(e!.data.geo_lat));
		newCoords.push(Number(e!.data.geo_lon));
		setCoords(newCoords);
		setErrors({ ...errors, address: '' });
		setErrorClass('');
	};

	const handleCheckboxChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		checked: boolean
	): void => {
		onChange('isOnline', e.target.checked);
	};

	const validateInputs = (): boolean => {
		const addressError = validateAddress(formData.address, formData.isOnline);
		if (addressError) {
			setErrors({ address: addressError });
			setErrorClass('error');
		}
		return !addressError;
	};

	const handleNext = (): void => {
		if (validateInputs()) {
			setStep(1);
		}
	};

	useEffect(() => {
		formData.address !== ''
			? suggestionsRef?.current?.setInputValue(formData.address)
			: suggestionsRef?.current?.setInputValue('Ростовская обл');
	}, [formData.address]);

	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				По какому адресу?
			</Typography>
			<Typography
				component={'p'}
				className='step__text'
				sx={{ mt: '-5px', mb: '30px', textAlign: 'center' }}
			>
				Если задание нужно выполнить&nbsp;онлайн, можете оставить
				поле&nbsp;Адрес пустым
			</Typography>
			<StyledLabel className={errorClass}>Адрес</StyledLabel>
			<AddressSuggestions
				ref={suggestionsRef}
				token={process.env.REACT_APP_API_KEY!}
				value={value}
				customInput={StyledInput}
				inputProps={{
					name: 'address',
					placeholder: 'Город, улица, дом',
				}}
				onChange={handleInputChange}
			/>
			<FormHelperText
				sx={{
					height: '20px',
					marginTop: -2,
					marginBottom: 1,
					color: '#FB6E07',
				}}
			>
				{errors.address}
			</FormHelperText>
			{formData.address !== '' && (
				<Map
					width='100%'
					height='240px'
					className='step__map'
					defaultState={{ center: { ...coords }, zoom: 12, controls: [] }}
					state={{ center: { ...coords } }}
				>
					<ZoomControl options={{ position: { left: 10, bottom: 40 } }} />
					<Placemark geometry={coords} />
				</Map>
			)}
			<FormControlLabel
				control={
					<CustomCheckbox name='isOnline' onChange={handleCheckboxChange} />
				}
				label={
					<Typography variant='body1' sx={{ mb: 0 }}>
						Выполнить удаленно
					</Typography>
				}
				sx={{ mb: '50px' }}
			/>
			<Box className='btn-container'>
				<CustomButton text='Далее' onClick={handleNext} className='step-btn' />
			</Box>
		</>
	);
};

export default Step1;
