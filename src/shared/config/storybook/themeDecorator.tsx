import { Story } from '@storybook/react';
import { ThemeContextProvider } from 'app/providers/ThemeContextProvider';
import { Theme } from 'app/providers/ThemeContextProvider/types/type';
import 'app/styles/index.scss';
import React from 'react';

export const themeDecorator = (theme: Theme) => (Story: Story) => (
    <ThemeContextProvider>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeContextProvider>
);
