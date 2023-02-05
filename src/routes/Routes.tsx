import React, { Fragment, lazy, Suspense } from 'react';
import { Routes as Routers, Route } from 'react-router-dom';
import { PATH_NAME } from 'shared/constants/routes';
import { IRoutes } from 'types';
import GuestGuard from 'guards/GuestGuard';
import AuthGuard from 'guards/AuthGuard';
import MainLayout from 'layouts/MainLayout';
import AuthLayout from 'layouts/AuthLayout';

const Home = lazy(() => import('features/Home'));
const Login = lazy(() => import('features/Login'));
const MyRecord = lazy(() => import('features/MyRecord'));
const TopPage = lazy(() => import('features/TopPage'));

const routesConfig: IRoutes[] = [
  {
    path: PATH_NAME.Home,
    layout: MainLayout,
    element: Home,
  },
  {
    path: PATH_NAME.Login,
    guard: GuestGuard,
    layout: AuthLayout,
    element: Login,
  },
  {
    path: PATH_NAME.MyRecord,
    guard: AuthGuard,
    layout: MainLayout,
    element: MyRecord,
  },
  {
    path: PATH_NAME.TopPage,
    guard: AuthGuard,
    layout: MainLayout,
    element: TopPage,
  },
];

const renderRoutes = (routes: IRoutes[]) => {
  return (
    <>
      {routes ? (
        <Suspense fallback={<div />}>
          <Routers>
            {routes.map((route: IRoutes, idx: number) => {
              const Guard = route.guard || Fragment;
              const Layout = route.layout || Fragment;
              const Component = route.element;

              return (
                <Route
                  key={`routes-${idx}`}
                  path={route.path}
                  element={
                    <Guard>
                      <Layout>
                        <Component />
                      </Layout>
                    </Guard>
                  }
                >
                  {route.routes ? renderRoutes(route.routes) : null}
                </Route>
              );
            })}
          </Routers>
        </Suspense>
      ) : null}
    </>
  );
};

const Routes = () => renderRoutes(routesConfig);

export default Routes;
