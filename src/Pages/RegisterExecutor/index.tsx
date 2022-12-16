import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Stepper from '../../Components/Stepper';
import RegStep1 from '../../Components/ExecutorRegistration/RegStep1';
import RegStep2 from '../../Components/ExecutorRegistration/RegStep2';
import RegStep3 from '../../Components/ExecutorRegistration/RegStep3';
import './style.sass';
import { FileWithPath } from 'react-dropzone';

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
	city: string;
	date_of_birth: string | null;
	phone?: string;
	email?: string;
	password: string;
	repeat_password: string;
	photo: FileWithPath[] | null;
	photo_with_doc: FileWithPath[] | null;
	description: string;
	category: string;
	subcategory: string[];
	isReliable?: boolean;
	portfolio?: File[] | null;
	prices?: any;
	type: 'executor' | 'client';
}

export const initialExecutorData: IExecutorData = {
	first_name: 'Ivan',
	last_name: 'Ivanov',
	city: 'Шахты',
	date_of_birth: null,
	phone: '+7 (928) 888 88 88',
	email: 'aaa@ggg.oo',
	password: 'I890a890',
	repeat_password: 'I890a890',
	photo: null,
	photo_with_doc: null,
	description: '',
	category: '',
	subcategory: [],
	isReliable: false,
	portfolio: null,
	prices: null,
	type: 'executor',
};

const ExecutorRegisterPage: React.FC = () => {
	const [step, setStep] = useState(1);
	const [executorData, setExecutorData] =
		useState<IExecutorData>(initialExecutorData);

	const onDataChange = (
		name: string,
		value: string | number | boolean | null | FileWithPath | any[]
	): void => {
		setExecutorData({ ...executorData, [name]: value });
	};

	const renderCurrentStep = (): JSX.Element | undefined => {
		switch (step) {
			case 0:
				return (
					<RegStep1
						executorData={executorData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			case 1:
				return (
					<RegStep2
						executorData={executorData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			case 2:
				return (
					<RegStep3
						executorData={executorData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			default:
				return (
					<RegStep1
						executorData={executorData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
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
