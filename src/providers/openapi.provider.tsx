'use client';

import { client } from '@/lib/api/client.gen';
import { useCallback, useEffect, useMemo } from 'react';
import { OnInterceptorsRequest, OnInterceptorsResponse } from '@/types/global.type';

export interface OpenAPIProviderProps {
  readonly children: React.ReactNode;
}

export interface ApiRequest extends Request {
  _clone?: Request;
}

export default function OpenAPIProvider({ children }: OpenAPIProviderProps) {
  const onInterceptorsRequest = useCallback<OnInterceptorsRequest>(async (request: ApiRequest) => {
    request._clone = request.clone();
    return request;
  }, []);

  const onInterceptorsResponse = useCallback<OnInterceptorsResponse>(async (response) => {
    return response;
  }, []);

  useMemo(() => {
    // Add Interceptors
    client.interceptors.request.use(onInterceptorsRequest);
    client.interceptors.response.use(onInterceptorsResponse);
  }, [onInterceptorsRequest, onInterceptorsResponse]);

  useEffect(() => {
    return () => {
      // Eject Interceptors
      client.interceptors.request.eject(onInterceptorsRequest);
      client.interceptors.response.eject(onInterceptorsResponse);
    };
  }, [onInterceptorsRequest, onInterceptorsResponse]);

  return children;
}
