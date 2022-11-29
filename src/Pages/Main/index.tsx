import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	Box,
	List,
	ListItem,
	Paper,
	Stack,
	Typography,
	Skeleton,
	Collapse,
} from '@mui/material';
import CustomButton from '../../Components/CustomButton/Index';
import { CategoriesActionEnum } from '../../store/types/categories';
import { useTypedSelector } from '../../hooks/hooks';
import {
	ISubcategory,
	SubcategoriesActionEnum,
} from '../../store/types/subcategories';
import './style.sass';
import ParallaxContainer from '../../Components/ParallaxContainer';

const heroContent = {
	title: 'Мне надо',
	description:
		'Немного текста о том, какие мы классные, и чем можем быть полезны',
	src: '../../assets/images/main_page_bgr.jpg',
	overlay: 4,
};

const Main: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { categories, isLoading: categoriesLoading } = useTypedSelector(
		(state) => state.categoriesState
	);
	const { subcategories } = useTypedSelector(
		(state) => state.subcategoriesState
	);

	let filteredSubcategories = (parentId: number): ISubcategory[] => {
		return subcategories.filter((item) => item.category === parentId);
	};

	const [expanded, setExpanded] = React.useState(0);
	const handleExpand = (itemId: number) => {
		setExpanded(itemId);
	};

	useEffect(() => {
		dispatch({ type: CategoriesActionEnum.GET_CATEGORIES });
		dispatch({ type: SubcategoriesActionEnum.GET_SUBCATEGORIES });
	}, [dispatch]);

	return (
		<Stack direction='column' alignItems='center' className='main'>
			{/* <Box className="bgImageContainer">
				<img src={require('../../assets/images/main_page_bgr.jpg')} className="bgImage" />
				<Typography component='h1' className='main__heading'>
					Мне надо
				</Typography>
				<Typography component='p' className='main__text'>
					Немного текста о том, какие мы классные, и чем можем быть полезны
				</Typography>
			</Box> */}
			<ParallaxContainer
				heroContent={heroContent}
				parallax={{ yPercent: 30, scale: 1.1 }}
				height={'100%'}
				parallaxContent={{ yPercent: 40, autoAlpha: 0 }}
			/>
			<Box className='section'>
				<Typography className='section__heading' component='h2'>
					Категории заданий
				</Typography>
				<List className='categories'>
					{(categoriesLoading ? Array.from(new Array(9)) : categories).map(
						(item, index) => (
							<>
								{item ? (
									<ListItem
										className='category'
										key={item.category_id}
										onClick={() => handleExpand(item.category_id)}
									>
										{item.name}
										<Collapse
											id={item.category_id}
											in={expanded === item.category_id}
											component={'ul'}
											className='subcategories'
										>
											{filteredSubcategories(item.category_id).map((el) => (
												<ListItem
													className='subcategory'
													key={el.sub_category_id}
												>
													{el.name}
												</ListItem>
											))}
										</Collapse>
									</ListItem>
								) : (
									<Skeleton
										variant='rectangular'
										width={210}
										height={30}
										sx={{ mb: '20px' }}
										key={index}
									/>
								)}
							</>
						)
					)}
				</List>
			</Box>
			<Stack
				direction='row'
				className='hero'
				alignItems='center'
				justifyContent='center'
			>
				<Box className='hero-img-wrap'>
					<img
						src={require('../../assets/images/bearded-hipster-man-with-wow-face-expression_1441-3417.webp')}
						alt='img'
						title='Image by storyset on Freepik'
						className='hero__img'
					/>
					<p className='hero-img-wrap__text'>Нужна помощь?</p>
				</Box>
				<CustomButton
					text='Разместить задание'
					onClick={() => {
						navigate('/orders/new');
					}}
					sx={{ mb: '40px', color: '#fff' }}
				/>
			</Stack>
			<Box className='section'>
				<Typography className='section__heading' component='h2'>
					Как это работает?
				</Typography>
				<Stack direction='row' justifyContent='center' alignItems='center'>
					<Paper className='section__step step'>
						<Typography component='h3' className='step__heading'>
							Создайте задание
						</Typography>
						<Typography component='p' className='step__descr'>
							Опишите все детали
						</Typography>
						<img
							src={require('../../assets/images/vector.jpg')}
							alt='img'
							title='Image by storyset on Freepik'
							className='step__img'
						/>
					</Paper>
					<Paper className='section__step'>
						<Typography component='h3' className='step__heading'>
							Выберите исполнителя
						</Typography>
						<Typography component='p' className='step__descr'>
							Получите отклики от исполнителей и выберите лучшего
						</Typography>
						<img
							src={require('../../assets/images/vector.jpg')}
							alt='img'
							title='Image by storyset on Freepik'
							className='step__img'
						/>
					</Paper>
					<Paper className='section__step'>
						<Typography component='h3' className='step__heading'>
							Оплатите по факту исполнения
						</Typography>
						<img
							src={require('../../assets/images/vector.jpg')}
							alt='img'
							title='Image by storyset on Freepik'
							className='step__img'
						/>
					</Paper>
				</Stack>
			</Box>
		</Stack>
	);
};

export default Main;
