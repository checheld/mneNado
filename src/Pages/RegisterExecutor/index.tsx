import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Stepper from '../../Components/Stepper';
import Step1 from '../../Components/ExecutorRegistration/Step1';
import './style.sass';

const steps = [
	{ label: 'Персональные данные', step: 0 },
	{ label: 'Регистрация', step: 1 },
	{ label: 'Фото', step: 2 },
	{ label: 'Описание', step: 3 },
	{ label: 'Цены', step: 4 },
	{ label: 'Портфоли', step: 5 },
	{ label: 'Предпросмотр', step: 6 },
];

export interface IExecutorData {
	first_name: string;
	last_name: string;
	patronymic?: string;
	city: string;
	date_of_birth: string | null;
	phone?: string;
	email?: string;
	password: string;
	repeatPassword: string;
	photo: File | null;
	photo_with_document: File | null;
	description: string;
	category: string;
	subcategory: string[];
	isReliable?: boolean;
	portfolio?: File[] | null;
	prices?: any;
}

export const initialExecutorData: IExecutorData = {
	first_name: '',
	last_name: '',
	patronymic: '',
	city: '',
	date_of_birth: null,
	phone: '',
	email: '',
	password: '',
	repeatPassword: '',
	photo: null,
	photo_with_document: null,
	description: '',
	category: '',
	subcategory: [],
	isReliable: false,
	portfolio: null,
	prices: null,
};

const ExecutorRegisterPage: React.FC = () => {
	const [step, setStep] = useState(0);
	const [executorData, setExecutorData] =
		useState<IExecutorData>(initialExecutorData);

	const onDataChange = (
		name: string,
		value: string | null | boolean | File[] | number | number[]
	): void => {
		setExecutorData({ ...executorData, [name]: value });
	};

	const renderCurrentStep = (): JSX.Element | undefined => {
		switch (step) {
			case 0:
				return (
					<Step1
						executorData={initialExecutorData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			case 1:
				return <p>Stp2</p>;
			case 2:
				return <p>Stp3</p>;
			case 3:
				return <p>Stp4</p>;
			case 4:
				return <p>Stp5</p>;
			case 5:
				return <p>Stp6</p>;
			case 6:
				return <p>Stp7</p>;
			default:
				return <p>Stp1</p>;
		}
	};
	return (
		<Box className='wrap'>
			<Typography component='h2' className='heading'>
				Регистрация
			</Typography>
			<Stepper activeStep={step} steps={steps.map((step) => step.label)} />
			<Paper className='step-container'>{renderCurrentStep()}</Paper>
		</Box>
	);
};
export default ExecutorRegisterPage;
