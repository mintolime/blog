import { lazy } from 'react';

export const MainPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./Main')), 1500);
    }),
);
