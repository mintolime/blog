import { MainPage } from "pages/Main";
import { NotFoundPage } from "pages/NotFound";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not-found'
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath["not-found"],
    element: <NotFoundPage />
  }
}
