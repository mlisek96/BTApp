import { Suspense } from 'react';
import { Outlet, type RouteObject } from 'react-router-dom';
import { Layout } from '$/components/Layout/Layout';
import { AuthProvider } from '$/contexts/AuthContext';
import { BudgetsProvider } from '$/contexts/BudgetContext';
import { AddExpense } from '$/pages/AddExpense';
import { ExpensesTable } from '$/pages/ExpensesTable';
import { ExpensesTableCategory } from '$/pages/ExpensesTableCategory';
import { MainPage } from '$/pages/MainPage';
import { CurrentUserValidator } from '$/router/Validators/CurrentUserValidator';

//to do dodać lazy loading

const tablesRoutes: RouteObject[] = [{
  path: '/tables/summary',
  element: <ExpensesTable />,
}, {
  path: '/tables/categories',
  element: <ExpensesTableCategory />,
}];

export const authenticatedRoutes: RouteObject[] = [{
  path: '/',
  element: (
    <Suspense>
      {/*<AuthProvider>*/}
      {/*  <CurrentUserValidator requireUserState="authenticated">*/}
      <BudgetsProvider>
        <Outlet />
      </BudgetsProvider>
      {/*</CurrentUserValidator>*/}
      {/*</AuthProvider>*/}
    </Suspense>
  ),
  children: [{
    path: '/',
    element: (
      //to do tutaj główny layout strony navbar i infobar
      <Layout />
    ),
    children: [{
      path: '/',
      element: (
        //to do layout środkowego contenera ze scrollem
        <></>
      ),
      children: [
        ...tablesRoutes,
        { path: '/main-page', element: <MainPage /> },
        { path: '/add-expense', element: <AddExpense /> },
      ],
    }],
  }],
}];
