import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeContextProvider/types/type';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};
Dark.decorators = [themeDecorator(Theme.DARK)];
