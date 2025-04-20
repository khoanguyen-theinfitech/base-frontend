'use client';

import { ToastContainer } from 'react-toastify';
import OpenAPIProvider from './openapi.provider';
import { Provider as JotaiProvider } from 'jotai';
import ReactQueryProvider from './react-query.provider';

export interface RootProviderProps {
  readonly children: React.ReactNode;
}

export default function RootProvider({ children }: RootProviderProps) {
  return (
    <JotaiProvider>
      <OpenAPIProvider>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </OpenAPIProvider>
      <ToastContainer limit={3} hideProgressBar theme='colored' />
    </JotaiProvider>
  );
}
