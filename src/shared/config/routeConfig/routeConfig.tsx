import { MainPage } from 'pages/Main';
import { NewsPage } from 'pages/News';
import { NotFoundPage } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not-found',
  NEWS = 'news',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NEWS]: '/news',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
  },
  [AppRoutes.NEWS]: {
    path: RouterPath.news,
    element: <NewsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath['not-found'],
    element: <NotFoundPage />,
  },
};
