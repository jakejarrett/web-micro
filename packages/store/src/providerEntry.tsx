import React, { PropsWithChildren } from 'react';

import { store } from './lib/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { StateType } from './lib/reducers';

const defaultState: StateType = {
  products: {
    data: undefined,
    errors: '',
    isLoading: false,
  },
};

export const ProvidersEntry: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Provider store={store} serverState={defaultState}>
        {children}
      </Provider>
      ;
    </ErrorBoundary>
  );
};
