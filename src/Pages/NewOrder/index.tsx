import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Step1 from '../../Components/NewOrderSteps/Step1';
import Stepper from '../../Components/Stepper';
import Step2 from '../../Components/NewOrderSteps/Step2';
import Step3 from '../../Components/NewOrderSteps/Step3';
import Step4 from '../../Components/NewOrderSteps/Step4';
import Step5 from '../../Components/NewOrderSteps/Step5';
import './style.sass';

const steps = [
	{ label: 'Step 1', step: 0 },
	{ label: 'Step 2', step: 1 },
	{ label: 'Step 3', step: 2 },
	{ label: 'Step 4', step: 3 },
	{ label: 'Step 5', step: 5 },
];

export interface IFormData {
	task_name: string;
	category: string;
	subcategory: string;
	address: string;
	isOnline: boolean;
	start_date: string | null;
	end_date: string | null;
	start_time: string | null;
	end_time: string | null;
	description: string;
	file: File[] | null;
	budget: number;
	payment_type: string;
}

export const initialFormData: IFormData = {
	task_name: '',
	category: '',
	subcategory: '',
	address: '',
	isOnline: false,
	start_date: null,
	end_date: null,
	start_time: null,
	end_time: null,
	description: '',
	file: null,
	budget: 0,
	payment_type: '',
};

const NewOrderPage: React.FC = () => {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState<IFormData>(initialFormData);

	const onDataChange = (
		name: string,
		value: string | null | boolean | File[]
	): void => {
		setFormData({ ...formData, [name]: value });
	};

	const renderCurrentStep = (): JSX.Element | undefined => {
		switch (step) {
			case 0:
				return (
					<Step1
						formData={formData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			case 1:
				return (
					<Step2
						formData={formData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			case 2:
				return (
					<Step3
						formData={formData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			case 3:
				return (
					<Step4
						formData={formData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			case 4:
				return (
					<Step5
						formData={formData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
			default:
				return (
					<Step1
						formData={formData}
						onChange={onDataChange}
						setStep={setStep}
					/>
				);
		}
	};
	return (
		<Box className='wrap'>
			<Typography component='h2' className='heading'>
				Создать заказ
			</Typography>
			<Stepper activeStep={step} steps={steps.map((step) => step.label)} />
			<Paper className='step-container'>{renderCurrentStep()}</Paper>
		</Box>
	);
};
export default NewOrderPage;
