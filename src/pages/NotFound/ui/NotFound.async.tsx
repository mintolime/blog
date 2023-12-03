import { lazy } from 'react';

export const NotFoundPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./NotFound')), 1500);
    }),
);
