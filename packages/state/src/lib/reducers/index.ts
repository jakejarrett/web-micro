import { ProductsStateType } from '../sagas/products/types';
import productReducer, {
  getProductsAction,
  getProductsErrorAction,
  getProductsSuccessAction,
  productsSlice,
} from './products/slice';

export type StateType = ProductsStateType;

const rootReducers = { products: productReducer };

export default rootReducers;

export {
  getProductsAction,
  getProductsErrorAction,
  getProductsSuccessAction,
  productsSlice,
};
