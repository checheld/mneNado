import axios, { AxiosResponse } from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import instance from '../axiosConfig';
import config from '../config';
import { SubcategoriesActionEnum, ISubcategory } from '../types/subcategories';
import { ContentTypes } from '../types/types';

const getSubcategoriesHandler = (config: any) =>
	instance.get<ISubcategory[]>('/subcategory/', config);

export const categoriesHandler = () => {
	return instance({
		headers: {
			method: 'GET',
			'Content-Type': ContentTypes.APPLICATION_JSON,
		},
	});
};

function* getSubategories() {
	try {
		const getSubcategoriesResponse: AxiosResponse<ISubcategory[]> = yield call(
			getSubcategoriesHandler,
			config
		);
		if (getSubcategoriesResponse.status === 200) {
			const response = getSubcategoriesResponse.data;
			yield put({
				type: SubcategoriesActionEnum.GET_SUBCATEGORIES_SUCCESS,
				payload: response,
			});
		}
	} catch (e) {
		yield put({
			type: SubcategoriesActionEnum.GET_SUBCATEGORIES_FAIL,
			payload: e,
		});
	}
}

export default function* getSubcategoriesWatcher() {
	yield takeEvery(SubcategoriesActionEnum.GET_SUBCATEGORIES, getSubategories);
}
