import { useMemo } from 'react';
import { reactQueryDefaultOptions } from '@/configs/react-query.config';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export interface ReactQueryProviderProps {
  readonly children: React.ReactNode;
}

export default function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: reactQueryDefaultOptions,
        queryCache: new QueryCache(),
        mutationCache: new MutationCache(),
      }),
    [],
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
