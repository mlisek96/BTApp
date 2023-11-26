import { Suspense } from 'react';
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '$/pages/404Page';
import { Home } from '$/pages/HeroPage';
import { authenticatedRoutes } from '$/router/authenticatedRoutes';
import { unauthenticatedRoutes } from '$/router/unauthenticatedRoutes';

export const router = createBrowserRouter(([{
  path: '/',
  element: <Home />,
}, {
  path: '/error',
  element: <NotFoundPage />,
}, {
  path: '/',
  errorElement: <Navigate to="/error" />,
  element: (
    <Suspense>
      <Outlet />
    </Suspense>
  ),
  children: [
    ...unauthenticatedRoutes,
    ...authenticatedRoutes,
  ],
}]));
