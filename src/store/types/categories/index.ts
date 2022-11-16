export enum CategoriesActionEnum {
	GET_CATEGORIES = 'GET_CATEGORIES',
	GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
	GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL',
	GET_SINGLE_CATEGORY = 'GET_SINGLE_CATEGORY',
}

export interface ICategory {
	category_id: number;
	name: string;
}

export interface ICategoriesState {
	isLoading: boolean;
	categories: ICategory[];
	error: string;
}

export interface IGetCategories {
	type: typeof CategoriesActionEnum.GET_CATEGORIES;
}

export interface IGetCategorieSuccess {
	type: typeof CategoriesActionEnum.GET_CATEGORIES_SUCCESS;
	payload: ICategory[];
}

export interface IGetCategoriesFail {
	type: typeof CategoriesActionEnum.GET_CATEGORIES_FAIL;
	payload: string;
}

export type CategoriesActions =
	| IGetCategories
	| IGetCategorieSuccess
	| IGetCategoriesFail;
