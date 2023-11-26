import { Suspense } from 'react';
import { Outlet, type RouteObject } from 'react-router-dom';
import { Home } from '$/pages/HeroPage';
import { LogIn } from '$/pages/LogIn';
import { CurrentUserValidator } from '$/router/Validators/CurrentUserValidator';

export const unauthenticatedRoutes: RouteObject[] = [{
  path: '/',
  element: (
    <Suspense>
      {/*<CurrentUserValidator requireUserState="unauthenticated">*/}
      <Outlet />
      {/*</CurrentUserValidator>*/}
    </Suspense>
  ),
  children: [{
    path: '/',
    element: (
      // to do layout dla login logout
      <></>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <LogIn /> },
    ],
  }],
}];
