import {
	CategoriesActionEnum,
	ICategoriesState,
	CategoriesActions,
} from '../types/categories';

const initialState: ICategoriesState = {
	isLoading: false,
	categories: [],
	error: '',
};

const categoriesReducer = (
	state = initialState,
	action: CategoriesActions
): ICategoriesState => {
	switch (action.type) {
		case CategoriesActionEnum.GET_CATEGORIES: {
			return {
				...state,
				isLoading: true,
			};
		}
		case CategoriesActionEnum.GET_CATEGORIES_SUCCESS: {
			return {
				...state,
				categories: action.payload,
			};
		}
		case CategoriesActionEnum.GET_CATEGORIES_FAIL: {
			return {
				...state,
				error: action.payload,
			};
		}
		default:
			return { ...state };
	}
};

export default categoriesReducer;
