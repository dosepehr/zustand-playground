import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Textarea from '.';
import { Theme, Size } from '@/utils/types/components/component-base.type';
import { FiSearch } from 'react-icons/fi';

const meta: Meta<typeof Textarea> = {
    title: 'components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: [
                'default',
                'primary',
                'secondary',
                'accent',
                'info',
                'success',
                'warning',
                'error',
                'neutral',
            ],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        placeholder: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const WithIcon: Story = {
    render: () => (
        <div className='space-y-4'>
            <Textarea
                icon={<FiSearch className='text-xl text-neutral' />}
                placeholder='Search...'
            />
            <Textarea
                icon={<FiSearch className='text-xl text-neutral' />}
                placeholder='Search...'
                iconReverse
            />
        </div>
    ),
};

export const AllThemes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
                'default',
                'primary',
                'secondary',
                'accent',
                'info',
                'success',
                'warning',
                'error',
                'neutral',
            ].map((theme) => (
                <Textarea
                    key={theme}
                    theme={theme as Theme}
                    placeholder={`Theme: ${theme}`}
                />
            ))}
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
                <Textarea
                    key={size}
                    size={size as Size}
                    placeholder={`Size: ${size}`}
                />
            ))}
        </div>
    ),
};

