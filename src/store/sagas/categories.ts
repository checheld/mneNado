import axios, { AxiosResponse } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import instance from '../axiosConfig';
import config from '../config';
import { CategoriesActionEnum, ICategory } from '../types/categories';
import { ContentTypes } from '../types/types';

const getCategoriesHandler = (config: any) =>
	instance.get<ICategory[]>('/category', config);

export const categoriesHandler = () => {
	return instance({
		headers: {
			method: 'GET',
			'Content-Type': ContentTypes.APPLICATION_JSON,
		},
	});
};

function* getCategories() {
	try {
		const getCategoriesResponse: AxiosResponse<ICategory[]> = yield call(
			getCategoriesHandler,
			config
		);
		if (getCategoriesResponse.status === 200) {
			const response = getCategoriesResponse.data;
			yield put({
				type: CategoriesActionEnum.GET_CATEGORIES_SUCCESS,
				payload: response,
			});
		}
	} catch (e) {
		yield put({ type: CategoriesActionEnum.GET_CATEGORIES_FAIL, payload: e });
	}
}

export default function* getCategoriesWatcher() {
	yield takeEvery(CategoriesActionEnum.GET_CATEGORIES, getCategories);
}
