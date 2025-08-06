import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import FileInput from '.';
import { Theme, Size } from '@/utils/types/components/component-base.type';

const themes: Theme[] = [
    'primary',
    'secondary',
    'accent',
    'info',
    'success',
    'warning',
    'error',
    'neutral',
    'default',
];

const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const meta: Meta<typeof FileInput> = {
    title: 'components/FileInput',
    component: FileInput,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: themes,
        },
        size: {
            control: 'select',
            options: sizes,
        },
    },
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
    args: {
        theme: 'primary',
        size: 'md',
    },
};

export const AllThemes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '1rem', maxWidth: 400 }}>
            {themes.map((theme) => (
                <FileInput key={theme} theme={theme} size='md' />
            ))}
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '1rem', maxWidth: 400 }}>
            {sizes.map((size) => (
                <FileInput key={size} size={size} theme='primary' />
            ))}
        </div>
    ),
};

