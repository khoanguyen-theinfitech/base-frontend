import { IRouter } from '@/types/router.type';

export type Routers = typeof routers;

const routers = {
  top: {
    router: '/',
    pattern: '/',
    private: true,
    roles: undefined,
  },
  login: {
    private: false,
    roles: undefined,
    router: '/login',
    pattern: '/login',
  },
  profile: {
    private: true,
    roles: undefined,
    router: '/profile',
    pattern: '/profile',
  },
  '403': {
    router: '/403',
    pattern: '/403',
    roles: undefined,
    private: undefined,
  },
} satisfies Record<string, IRouter>;

export default routers;
