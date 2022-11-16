import { combineReducers } from 'redux';
import categoriesReducer from './categories';

export const rootReducer = combineReducers({ categoriesReducer });

export type RootState = ReturnType<typeof rootReducer>;
