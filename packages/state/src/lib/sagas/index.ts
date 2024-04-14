import { all, fork } from 'redux-saga/effects';
import { productsSaga } from './products';

export const rootSaga = function* () {
  yield all([
    fork(productsSaga),
    // Other forks
  ]);
};

export type { IProductsState, Product } from './products/types';
