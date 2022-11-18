import React, { useRef, useState } from 'react';
import { Box, Chip, Paper, Typography } from '@mui/material';
import Stepper from '../../Components/Stepper';
import Step1 from '../../Components/NewOrderSteps/Step1';
import Step2 from '../../Components/NewOrderSteps/Step2';
import Step3 from '../../Components/NewOrderSteps/Step3';
import Step4 from '../../Components/NewOrderSteps/Step4';
import Step5 from '../../Components/NewOrderSteps/Step5';
import TaskPreview from '../../Components/NewOrderSteps/Step6';
import { FileWithPath } from 'react-dropzone';
import { categories, subcategories } from '../../dummyData';
import './style.sass';

const steps = [
	{ label: 'Адрес', step: 0 },
	{ label: 'Название и категория', step: 1 },
	{ label: 'Сроки выполнения', step: 2 },
	{ label: 'Детали', step: 3 },
	{ label: 'Бюджет и способ оплаты', step: 5 },
	{ label: 'Предпросмотр', step: 6 },
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
	files: FileWithPath[] | null;
	budget: number | number[] | null;
	payment_method: string;
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
	files: null,
	budget: 0,
	payment_method: '',
};

const NewOrderPage: React.FC = () => {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState<IFormData>(initialFormData);
	const categoryChip = useRef<HTMLElement>(null);

	const onDataChange = (
		name: string,
		value: string | null | boolean | File[] | number | number[]
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
			case 5:
				return (
					<TaskPreview
						formData={formData}
						setStep={setStep}
						paymentMethod={formData.payment_method}
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
			{step === 1 ? (
				<aside className='categories-list'>
					{categories.map((item) => (
						<Chip
							key={item.category_id}
							label={item.name}
							component='span'
							clickable
							className='categories-list__item'
							ref={categoryChip}
						/>
					))}
				</aside>
			) : null}
		</Box>
	);
};
export default NewOrderPage;
