import { ProductsStateType } from "../sagas/products/types";
import productReducer from "./products/slice";

export type StateType = ProductsStateType;

const rootReducers = { products: productReducer, };

export default rootReducers;
