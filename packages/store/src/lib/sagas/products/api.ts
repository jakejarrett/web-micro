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


export const fetchProducts = async (): Promise<ProductsReturn | undefined> => {
  try {
    const products = await fetch('https://dummyjson.com/products')
    const body = await products.json();
    return body;
  } catch (err) {
    return undefined;
  }

};
