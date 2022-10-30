import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Step1 from '../../Components/NewOrderSteps/Step1';
import Stepper from '../../Components/Stepper';
import './style.sass';

const steps = [
	{ label: '1. Personal information', step: 0 },
	{ label: '2. Contact information', step: 1 },
	{ label: '3. Upload medical bill', step: 2 },
	{ label: '4. Final step', step: 3 },
];

export interface IFormData {
	task_name: string;
	category?: string;
	subcategory?: string;
	address?: string;
	start_date?: null;
	end_date?: null;
	period?: null;
	description?: string;
	image?: string;
	budget?: string;
	payment_type?: string;
}

export const initialFormData: IFormData = {
	task_name: '',
	category: '',
	subcategory: '',
	address: '',
	start_date: null,
	end_date: null,
	period: null,
	description: '',
	image: '',
	budget: '',
	payment_type: '',
};

const NewOrderPage: React.FC = () => {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState<IFormData>(initialFormData);

	const onDataChange = (
		name: string,
		value: string | null | boolean | File
	): void => {
		setFormData((prevValues) => ({ ...prevValues, [name]: value }));
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
		<Box>
			<Typography>Создать заказ</Typography>
			<Stepper activeStep={step} steps={steps.map((step) => step.label)} />
			<Box className='form-container'>{renderCurrentStep()}</Box>
		</Box>
	);
};
export default NewOrderPage;
