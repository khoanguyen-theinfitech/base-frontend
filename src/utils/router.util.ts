import routers from '@/constants/router.constant';
import { ArgsRouterFunction, IRouter, RouterNames } from '@/types/router.type';

export const getRouter = <N extends RouterNames>(name?: N, ...args: ArgsRouterFunction<N>) => {
  if (!name) return '';
  const router = routers[name]?.router as IRouter['router'];
  return typeof router === 'function' ? router(...args) : router;
};
