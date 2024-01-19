import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'text',
        theme: ThemeButton.ClASSIC,
    },
};

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
