import React, { ComponentType, lazy, LazyExoticComponent, ReactNode } from 'react';

export interface IRoute {
  path: string;
  exact: boolean;
  fallback: NonNullable<ReactNode> | null;
  component?: LazyExoticComponent<ComponentType<any>>;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
    fallback: <div> Loading... </div>,
  },
  {
    path: '/home',
    component: lazy(() => import('../pages/Home')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
    routes: [
      {
        path: '/home/signup',
        component: lazy(() => import('../pages/Signup')),
        exact: false,
        private: false,
        fallback: <div> Loading... </div>,
      },
      {
        path: '/home/login',
        component: lazy(() => import('../pages/Login')),
        exact: false,
        private: true,
        fallback: <div> Loading... </div>,
      },
    ],
  },
  {
    path: '/task',
    component: lazy(() => import('../pages/TaskPage')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
];
