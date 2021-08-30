import React from 'react';
import _get from 'lodash.get';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const ReactQueryPovider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
);

export default ReactQueryPovider;
