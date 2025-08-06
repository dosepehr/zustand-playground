import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tooltip from '.';
import { Theme } from '@/utils/types/components/component-base.type';
import { Position } from './tooltip.type';
import type { StoryFn, Args, StoryContext } from '@storybook/nextjs-vite';
type Story = StoryObj<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
    title: 'components/Tooltip',
    component: Tooltip,
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
            ] as Theme[],
        },
        position: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left'] as Position[],
        },
        content: { control: 'text' },
    },

    decorators: [
        (Story: StoryFn<Args>, context: StoryContext) => (
            <div
                style={{
                    padding: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {Story(context.args, context)}
            </div>
        ),
    ],
};
export default meta;

// Basic usage
export const Default: Story = {
    args: {
        content: 'Tooltip content here',
        theme: 'primary',
        position: 'top',
        children: <button>Hover me</button>,
    },
};

// Show all themes
export const AllThemes: Story = {
    render: (args) => (
        <div style={{ display: 'flex', gap: 20 }}>
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
                <Tooltip
                    key={theme}
                    {...args}
                    theme={theme as Theme}
                    content={`${theme} tooltip`}
                >
                    <button>{theme}</button>
                </Tooltip>
            ))}
        </div>
    ),
    args: {
        position: 'top',
    },
};

// Show all positions
export const AllPositions: Story = {
    render: (args) => (
        <div
            style={{
                display: 'flex',
                gap: 40,
                justifyContent: 'center',
                marginTop: 100,
            }}
        >
            {['top', 'right', 'bottom', 'left'].map((position) => (
                <Tooltip
                    key={position}
                    {...args}
                    position={position as Position}
                    content={`${position} tooltip`}
                >
                    <button>{position}</button>
                </Tooltip>
            ))}
        </div>
    ),
    args: {
        theme: 'primary',
    },
};
export const CustomContent: Story = {
    args: {
        content: (
            <div className='text-sm'>
                <p className='font-bold'>More info</p>
                <p>This tooltip has custom JSX content.</p>
            </div>
        ),
        children: <span className='underline cursor-help'>Hover here</span>,
        theme: 'info',
    },
};

