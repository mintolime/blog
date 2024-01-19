import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeContextProvider/types/type';
import 'app/styles/index.scss';

export const themeDecorator = (theme: Theme) => (Story: Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
