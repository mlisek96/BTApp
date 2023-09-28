import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from '$/components/Layout/Layout';
import { NotFoundPage } from '$/views/404Page';
import { AddExpense } from '$/views/AddExpense';
import { ExpensesTable } from '$/views/ExpensesTable';
import { ExpensesTableCategory } from '$/views/ExpensesTableCategory';
import { Home } from '$/views/HeroPage';
import { LogIn } from '$/views/LogIn';
import { MainPage } from '$/views/MainPage';

export const router = createBrowserRouter([{
  path: '/error',
  element: <NotFoundPage />,
}, {
  path: '/login',
  element: <LogIn />,
}, {
  path: '/',
  element: <Home />,
}, {
  path: '/layout',
  errorElement: <Navigate to="/error" />,
  element: <Layout />,
  children: [
    { path: 'main-page', element: <MainPage /> },
    {  path: 'add-expense', element: <AddExpense /> },
    {
      path: 'expenses-table,',
      children: [
        { element: <ExpensesTable />, index: true },
        { path: 'categories', element: <ExpensesTableCategory /> },
      ],
    },
  ],
},
]);
