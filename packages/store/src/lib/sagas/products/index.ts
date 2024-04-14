
import { call, put, takeEvery } from 'redux-saga/effects'
import { ProductsReturn, fetchProducts } from './api'
import { FETCH_PRODUCTS } from './types';
import { getProductsSuccessAction, getProductsErrorAction } from '../../reducers/products/slice'

function* fetchUser() {
  try {
    const prodReturn: ProductsReturn | undefined = yield call(fetchProducts)
    console.log(prodReturn)
    if (prodReturn?.products) {
      yield put(getProductsSuccessAction(prodReturn?.products))
    }
  } catch (e) {
    const err = e as Error;
    yield put(getProductsErrorAction(err.message))
  }
}

export function* productsSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchUser)
}
