import { RequestOptions } from '@hey-api/client-fetch';

export interface ISessionAtom {
  accessToken: string;
  refreshToken: string;
}

export type AnyFunction<T = any> = (...args: Array<any>) => T;
export type AnyFunctionAsync<T = any> = (...args: Array<any>) => Promise<T>;

export type OnInterceptorsRequest = (
  request: Request,
  options: RequestOptions<boolean, string>,
) => Promise<Request>;

export type OnInterceptorsResponse = (
  response: Response,
  request: Request,
  options: RequestOptions<boolean, string>,
) => Promise<Response>;
