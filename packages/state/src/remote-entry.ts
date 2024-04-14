import rootReducers, {
  type StateType,
  getProductsAction,
  getProductsErrorAction,
  getProductsSuccessAction,
  productsSlice,
} from './lib/reducers';

export { default } from './app/app';

export { store } from './lib/store';
export { createAppSlice } from './lib/createAppSlice';
export { rootSaga } from './lib/sagas';
export {
  rootReducers,
  getProductsAction,
  getProductsErrorAction,
  getProductsSuccessAction,
  productsSlice,
};

export type { StateType };
