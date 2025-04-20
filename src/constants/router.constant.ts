import { IRouter } from '@/types/router.type';

export type Routers = typeof routers;

const routers = {
  top: {
    router: '/',
    pattern: '/',
    private: true,
    role: undefined,
  },
  login: {
    private: false,
    role: undefined,
    router: '/login',
    pattern: '/login',
  },
} satisfies Record<string, IRouter>;

export default routers;
