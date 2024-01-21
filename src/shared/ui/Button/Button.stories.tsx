import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator';
import { Theme } from 'app/providers/ThemeContextProvider/types/type';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.ClASSIC,
    },
};
Primary.decorators = [themeDecorator(Theme.DARK)];

export const Transparent: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.TRANSPARENT,
    },
};

export const Warm: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.WARNING,
    },
};
