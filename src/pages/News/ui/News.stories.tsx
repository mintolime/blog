import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeContextProvider/types/type';
import News from './News';

const meta = {
    title: 'pages/News',
    component: News,
    tags: ['autodocs'],
} satisfies Meta<typeof News>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
