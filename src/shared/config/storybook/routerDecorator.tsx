import React from 'react';
import { Story, StoryContext } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (story: () => React.ReactNode, context: StoryContext) => (
    <BrowserRouter>{story()}</BrowserRouter>
);
