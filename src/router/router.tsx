import { Suspense } from 'react';
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '$/views/404Page';

export const router = createBrowserRouter(([{
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
}]));

// export const router = createBrowserRouter([{
//   path: '/error',
//   element: <NotFoundPage />,
// }, {
//   path: '/login',
//   element: <LogIn />,
// }, {
//   path: '/',
//   errorElement: <Navigate to="/error" />,
//   element: <Home />,
// }, {
//   path: '/layout',
//   element: <Layout />,
//   children: [
//     { path: '/main-page', element: <MainPage /> },
//     {  path: 'add-expense', element: <AddExpense /> },
//     {
//       path: 'expenses-table,',
//       children: [
//         { element: <ExpensesTable />, index: true },
//         { path: 'categories', element: <ExpensesTableCategory /> },
//       ],
//     },
//   ],
// },
// ]);
