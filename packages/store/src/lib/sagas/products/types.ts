export interface ProductsReturn {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type IProductsState = {
  /**
   * Undefined represents no state.
   * An empty array
   */
  data: Product[] | undefined;
  isLoading: boolean;
  errors: string;
}

// The PRODUCTS global state
export type ProductsStateType = {
  products: IProductsState,
}

export const PRODUCTS = "PRODUCTS";
export const FETCH_PRODUCTS = `${PRODUCTS}/getProductsAction`;
export const FETCH_PRODUCTS_SUCCEEDED = `${PRODUCTS}/getProductsSuccessAction`;
export const FETCH_PRODUCTS_FAILED = `${PRODUCTS}/getProductsErrorAction`;
