import { ProductsStateType } from "../../types/products";
import productReducer from "./products/slice";

export type StateType = ProductsStateType;

const rootReducers = { products: productReducer, };

export default rootReducers;
