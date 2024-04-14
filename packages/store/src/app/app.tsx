import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { StateType } from 'state/Module';

const Product = React.lazy(() => import('product/Module'));

const Checkout = React.lazy(() => import('checkout/Module'));

const getProductsAction = import('state/Module').then(
  ({ getProductsAction }) => {
    return getProductsAction;
  }
);

export const App: React.FC = () => {
  const store = useSelector((state: StateType) => {
    console.log(state);
    return state.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    getProductsAction.then((action) => {
      console.log(getProductsAction);
      dispatch(action());
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
