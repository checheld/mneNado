import {
	CategoriesActionEnum,
	ICategory,
	IGetCategoriesSuccess,
} from '../types/categories';

export const getCategoriesSuccess = (
	categories: ICategory[]
): IGetCategoriesSuccess => {
	return {
		type: CategoriesActionEnum.GET_CATEGORIES_SUCCESS,
		payload: categories,
	};
};
