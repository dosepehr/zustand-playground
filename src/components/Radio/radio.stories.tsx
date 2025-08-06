import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import Radio from '.';

const themes = [
    'primary',
    'secondary',
    'accent',
    'info',
    'success',
    'warning',
    'error',
    'neutral',
    'default',
] as const;

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const meta: Meta<typeof Radio> = {
    title: 'components/Radio',
    component: Radio,
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
        name: { control: 'text' },
        id: { control: 'text' },
        checked: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        name: 'example-group',
        id: 'radio-1',
        size: 'sm',
        theme: 'primary',
        defaultChecked: false,
    },
};

export const AllThemes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {themes.map((theme) => (
                    <Radio
                        key={theme}
                        name='theme-group'
                        id={`theme-${theme}`}
                        theme={theme}
                        size='md'
                        onChange={() => {}}
                        label={theme}
                    />
                ))}
            </div>
        );
    },
};

export const AllSizes: Story = {
    render: () => {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {sizes.map((size) => (
                    <Radio
                        key={size}
                        name='size-group'
                        id={`size-${size}`}
                        size={size}
                        theme='primary'
                        onChange={() => {}}
                        label={size}
                    />
                ))}
            </div>
        );
    },
};
