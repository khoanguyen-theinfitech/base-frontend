import { URLPattern } from 'next/server';
import { AnyFunction } from './global.type';
import { Routers } from '@/constants/router.constant';

/**
 * Interface for router
 * @interface IRouter
 * @property {string} pattern - Define the pattern of the router. It will be used in middleware to check the router.
 * @property {Array<string>} [role] - Optional roles associated with the router.
 * @property {boolean} [private] - Optional flag to indicate if the router is private.
 * @property {string | AnyFunction<string>} router - The router, which can be a string or a function returning a string.
 * @exports IRouter
 */
export interface IRouter {
  pattern: `/${string}`;
  private: boolean | undefined;
  role: Array<string> | undefined;
  router: string | AnyFunction<string>;
}

export type RouterNames = keyof Routers;
export type RouterResult<N extends RouterNames> = Routers[N]['router'];
export type ArgsRouterFunction<N extends RouterNames, A = RouterResult<N>> =
  A extends AnyFunction<string> ? Parameters<A> : Array<any>;

export interface URLPatternRouter extends Omit<IRouter, 'pattern'> {
  name: RouterNames;
  pattern: URLPattern;
}
