import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import subcategoriesReducer from './subcategories';

export const rootReducer = combineReducers({
	categoriesState: categoriesReducer,
	subcategoriesState: subcategoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
