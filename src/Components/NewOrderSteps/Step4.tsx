import React, { FC, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import './style.sass';
import CustomTextarea from '../CustomTextarea';
import CustomDropzone from '../Dropzone';

interface IProps {
	formData: IFormData;
	onChange: (name: string, value: string | boolean | File[] | null) => void;
	setStep: (step: number) => void;
}

interface IErrorsData {
	description: '';
}

const initialErrors: IErrorsData = {
	description: '',
};

const Step4: FC<IProps> = ({ formData, onChange, setStep }) => {
	const [files, setFiles] = useState(formData.file);
	const [modalOpened, setModalOpened] = useState(false);
	const [errors, setErrors] = useState(initialErrors);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		onChange(e.target.name, e.target.value);
		setErrors({ ...errors, [e.target.name]: '' });
	};

	const handleClear = (): void => {
		setFiles(null);
	};

	const handlePrev = (): void => {
		setStep(2);
		setFiles(files);
	};

	const handleNext = (): void => {
		onChange('file', files);
		setStep(4);
	};

	const thumbs = files?.map((el) => {
		<Box key={el.name}>
			<img src={URL.createObjectURL(el)} alt={el.name} />
		</Box>;
	});

	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Детали задания
			</Typography>
			<CustomTextarea
				id='description'
				name='description'
				value={formData.description}
				label='Описание задачи'
				placeholder='Опишите детали задания'
				onChange={handleInputChange}
				className='textarea'
			/>
			{!files ? (
				<>
					<Typography variant='body1'>Добавить фото</Typography>
					<CustomDropzone setFiles={setFiles} />
				</>
			) : (
				<Stack
					className='file-container'
					direction='row'
					alignItems='center'
					sx={{ mb: '20px' }}
				>
					<>
						<AttachFileIcon />
						{files.forEach((item) => (
							<>
								<Stack>
									{thumbs?.map((el) => (
										<>{el}</>
									))}
								</Stack>
								<Typography variant='body1' sx={{ m: '0 10px ' }}>
									{item['name']}
								</Typography>
								<Typography variant='subtitle1'>
									{Math.ceil((item['size'] / (1024 * 1024)) * 100) / 100 +
										' МБ'}
								</Typography>
							</>
						))}
					</>
				</Stack>
			)}

			<Box className='btn-container'>
				{files && (
					<CustomButton
						text='Удалить'
						onClick={handleClear}
						className='step-btn'
					/>
				)}
				<CustomButton
					text='Назад'
					onClick={handlePrev}
					variant='outlined'
					sx={{ color: '#CBD8DD !important' }}
					className='step-btn back-btn'
				/>
				<CustomButton text='Далее' onClick={handleNext} className='step-btn' />
			</Box>
		</>
	);
};

export default Step4;
