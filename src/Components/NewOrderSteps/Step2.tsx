import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Box,
	Typography,
	Chip,
	Stack,
	ListItem,
	List,
	Skeleton,
} from '@mui/material';
import CustomButton from '../CustomButton/Index';
import { IFormData } from '../../Pages/NewOrder';
import { useTypedSelector } from '../../hooks/hooks';
import {
	ISubcategory,
	SubcategoriesActionEnum,
} from '../../store/types/subcategories';
import { CategoriesActionEnum } from '../../store/types/categories';
interface IProps {
	formData: IFormData;
	onChange: (item: string, value: string | null) => void;
	setStep: (step: number) => void;
}

const Step2: FC<IProps> = ({ formData, onChange, setStep }) => {
	const dispatch = useDispatch();
	const [isActiveChip, setActiveChip] = useState(0);
	const [isActive, setIsActive] = useState(0);

	const { categories, isLoading } = useTypedSelector(
		(state) => state.categoriesState
	);
	const { subcategories } = useTypedSelector(
		(state) => state.subcategoriesState
	);

	let filteredSubcategories = (parentId: number): ISubcategory[] => {
		return subcategories.filter((item) => item.category === parentId);
	};

	useEffect(() => {
		if (!categories.length && !subcategories.length) {
			dispatch({ type: CategoriesActionEnum.GET_CATEGORIES });
			dispatch({ type: SubcategoriesActionEnum.GET_SUBCATEGORIES });
		}
	}, [dispatch]);

	const handleCategoryChange =
		(id: number) =>
		(e: React.MouseEvent<HTMLElement>): void => {
			onChange('category', String(id));
			setActiveChip(id);
		};

	const handleSubcategoryChange = (e: React.MouseEvent<HTMLElement>): void => {
		onChange('subcategory', e.currentTarget.id);
		setIsActive(+e.currentTarget.id);
	};

	const handlePrev = (): void => {
		setStep(0);
	};

	const handleNext = (): void => {
		setStep(2);
	};

	return (
		<>
			<Typography component={'h3'} className='step__heading'>
				Выберите категорию
			</Typography>
			<Stack direction='row' flexWrap='wrap' sx={{ mb: '30px' }}>
				{(isLoading ? Array.from(new Array(9)) : categories).map(
					(item, index) => (
						<>
							{item ? (
								<Chip
									key={item.category_id}
									label={item.name}
									component='span'
									className={`category-chip ${
										isActiveChip === item.category_id ? 'selected-chip' : ''
									}`}
									onClick={handleCategoryChange(item.category_id)}
									clickable
								/>
							) : (
								<Skeleton
									variant='rectangular'
									width={80}
									height={30}
									sx={{ mb: '20px' }}
									key={index}
								/>
							)}
						</>
					)
				)}
			</Stack>
			<Stack direction='column' sx={{ mb: '50px' }}>
				{formData.category &&
				filteredSubcategories(+formData.category).length ? (
					<>
						<Typography component='h4' className='step__heading'>
							Выберите подкатегорию
						</Typography>
						<List>
							{filteredSubcategories(+formData.category).map((item) => (
								<ListItem
									key={item.sub_category_id}
									className={`subcategory ${
										isActive === item.sub_category_id ? 'selected' : ''
									}`}
									id={String(item.sub_category_id)}
									onClick={handleSubcategoryChange}
								>
									{item.name}
								</ListItem>
							))}
						</List>
					</>
				) : null}
			</Stack>
			<Box className='btn-container'>
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

export default Step2;
