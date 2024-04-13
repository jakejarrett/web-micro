
import { call, put, takeEvery } from 'redux-saga/effects'
import { ProductsReturn, fetchProducts } from './api'
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCEEDED
} from '../../../types/products';

// worker Saga: will be fired on FETCH_PRODUCTS_REQUESTED actions
function* fetchUser(action: unknown) {
  console.log(action);
  try {
    const products: ProductsReturn | undefined = yield call(fetchProducts)
    yield put({
      type: FETCH_PRODUCTS_SUCCEEDED,
      products
    })
  } catch (e) {
    yield put({ type: FETCH_PRODUCTS_FAILED })
  }
}

/*
  Starts fetchUser on each dispatched `FETCH_PRODUCTS_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* productsSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchUser)
}
