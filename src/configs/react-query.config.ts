import { DefaultOptions } from '@tanstack/react-query';

export const reactQueryDefaultOptions: DefaultOptions<Error> = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
  },
  mutations: {
    retry: false,
  },
};
