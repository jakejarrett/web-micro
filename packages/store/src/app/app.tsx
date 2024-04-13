import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
  ReactReduxContext,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsAction } from '../lib/reducers/products/slice';
import { StateType } from '../lib/reducers';
import { FETCH_PRODUCTS } from '../types/products';

const Product = React.lazy(() => import('product/Module'));

const Checkout = React.lazy(() => import('checkout/Module'));

export const App: React.FC = () => {
  const store = useSelector((state: StateType) => {
    console.log(state);
    return state.products;
  });
  const dispatch = useDispatch();

  // console.log(store);

  useEffect(() => {
    dispatch({
      type: FETCH_PRODUCTS,
    });
  }, []);

  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/product">Product</Link>
        </li>

        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<p>Wooo</p>} />

        <Route path="/product" element={<Product />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </React.Suspense>
  );
};
