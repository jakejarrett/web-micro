import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './sagas'
import rootReducers from "./reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducers,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga)

