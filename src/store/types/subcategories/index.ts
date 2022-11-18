export enum SubcategoriesActionEnum {
	GET_SUBCATEGORIES = 'GET_SUBCATEGORIES',
	GET_SUBCATEGORIES_SUCCESS = 'GET_SUBCATEGORIES_SUCCESS',
	GET_SUBCATEGORIES_FAIL = 'GET_SUBCATEGORIES_FAIL',
	GET_SINGLE_SUBCATEGORY = 'GET_SINGLE_SUBCATEGORY',
}

export interface ISubcategory {
	sub_category_id: number;
	name: string;
	category: number;
}

export interface ISubcategoriesState {
	isLoading: boolean;
	subcategories: ISubcategory[];
	error: string;
}

export interface IGetSubcategories {
	type: typeof SubcategoriesActionEnum.GET_SUBCATEGORIES;
}

export interface IGetSubcategoriesSuccess {
	type: typeof SubcategoriesActionEnum.GET_SUBCATEGORIES_SUCCESS;
	payload: ISubcategory[];
}

export interface IGetSubcategoriesFail {
	type: typeof SubcategoriesActionEnum.GET_SUBCATEGORIES_FAIL;
	payload: string;
}

export type SubcategoriesActions =
	| IGetSubcategories
	| IGetSubcategoriesSuccess
	| IGetSubcategoriesFail;
