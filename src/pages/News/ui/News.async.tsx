import { lazy } from 'react';

export const NewsPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./News')), 1500);
    }),
);
