import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import getCategoriesWatcher from './categories';
import getSubcategoriesWatcher from './subcategories';

const rootSaga = function* (): Generator<
	AllEffect<ForkEffect<void>>,
	void,
	unknown
> {
	yield all([fork(getCategoriesWatcher), fork(getSubcategoriesWatcher)]);
};

export default rootSaga;
