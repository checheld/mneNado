import {
	ISubcategoriesState,
	SubcategoriesActionEnum,
	SubcategoriesActions,
} from '../types/subcategories';

const initialState: ISubcategoriesState = {
	isLoading: false,
	subcategories: [],
	error: '',
};

const subcategoriesReducer = (
	state = initialState,
	action: SubcategoriesActions
): ISubcategoriesState => {
	switch (action.type) {
		case SubcategoriesActionEnum.GET_SUBCATEGORIES: {
			return {
				...state,
				isLoading: true,
			};
		}
		case SubcategoriesActionEnum.GET_SUBCATEGORIES_SUCCESS: {
			return {
				...state,
				isLoading: false,
				subcategories: action.payload,
				error: '',
			};
		}
		case SubcategoriesActionEnum.GET_SUBCATEGORIES_FAIL: {
			return {
				...state,
				isLoading: false,
				subcategories: [],
				error: action.payload,
			};
		}
		default:
			return { ...state };
	}
};

export default subcategoriesReducer;
