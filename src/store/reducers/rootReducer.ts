import { combineReducers } from 'redux';
import smoothScrollbarReducer from "../../features/smoothScrollbarSlice";
import categoriesReducer from './categories';
import subcategoriesReducer from './subcategories';

export const rootReducer = combineReducers({
	categoriesState: categoriesReducer,
	subcategoriesState: subcategoriesReducer,
	scrollbar: smoothScrollbarReducer
});

export type RootState = ReturnType<typeof rootReducer>;
