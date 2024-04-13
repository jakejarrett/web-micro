import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS, Product, IProductsState } from "../../../types/products";

const usersInitialState: IProductsState = {
  data: undefined,
  isLoading: false,
  errors: '',
}

const productsSlice = createSlice({
  name: PRODUCTS,
  initialState: usersInitialState,
  reducers: {
    /* This action will trigger our saga middleware
       and set the loader to true and reset error message.
    */
    getProductsAction: (state: IProductsState) => {
      state.isLoading = true;
      state.errors = '';
    },
    getProductsSuccessAction: (state: IProductsState, { payload: products }: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.data = products;
    },
    getProdductsErrorAction: (state: IProductsState, { payload: error }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = error;
    },
  }
});
const {
  getProductsAction,
  getProductsSuccessAction,
  getProdductsErrorAction
} = productsSlice.actions;

export {
  getProductsAction,
  getProductsSuccessAction,
  getProdductsErrorAction,
  productsSlice,
};

export default productsSlice.reducer;
