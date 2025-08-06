import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Indicator from '.';
import { IndicatorProps } from './indicator.type';
import Badge from '../Badge';

const meta: Meta<typeof Indicator> = {
    title: 'Components/Indicator',
    component: Indicator,
    tags: ['autodocs'],
    argTypes: {
        horizontal: {
            control: { type: 'radio' },
            options: ['start', 'center', 'end'],
        },
        vertical: {
            control: { type: 'radio' },
            options: ['top', 'middle', 'bottom'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Indicator>;

const baseArgs: IndicatorProps = {
    horizontal: 'center',
    vertical: 'middle',
    indicator: (
        <Badge classname='indicator-item' theme='secondary'>
            New
        </Badge>
    ),
    children: (
        <div className='w-32 h-32 bg-gray-200 flex items-center justify-center rounded-xl'>
            Target
        </div>
    ),
};

export const Default: Story = {
    args: baseArgs,
};

export const TopLeft: Story = {
    args: {
        ...baseArgs,
        vertical: 'top',
        horizontal: 'start',
    },
};

export const TopRight: Story = {
    args: {
        ...baseArgs,
        vertical: 'top',
        horizontal: 'end',
    },
};

export const BottomLeft: Story = {
    args: {
        ...baseArgs,
        vertical: 'bottom',
        horizontal: 'start',
    },
};

export const BottomRight: Story = {
    args: {
        ...baseArgs,
        vertical: 'bottom',
        horizontal: 'end',
    },
};

export const MiddleCenter: Story = {
    args: {
        ...baseArgs,
        vertical: 'middle',
        horizontal: 'center',
    },
};
