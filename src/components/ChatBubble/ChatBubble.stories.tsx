import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import ChatBubble from '.';
import { Theme } from '@/utils/types/components/component-base.type';
import { ChatBubblePosition } from './chat-bubble.type';

const meta: Meta<typeof ChatBubble> = {
    title: 'Components/ChatBubble',
    component: ChatBubble,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: { type: 'select' },
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
            ] satisfies Theme[],
        },
        position: {
            control: { type: 'radio' },
            options: ['start', 'end'] satisfies ChatBubblePosition[],
        },
    },
};

export default meta;

type Story = StoryObj<typeof ChatBubble>;

export const Default: Story = {
    args: {
        children: 'Hello! This is a default chat bubble.',
    },
};

export const Primary: Story = {
    args: {
        children: 'Hi! I am a primary bubble.',
        theme: 'primary',
    },
};

export const AccentEnd: Story = {
    args: {
        children: 'Hey! I am on the end side with accent theme.',
        theme: 'accent',
        position: 'end',
    },
};

export const AllThemes: Story = {
    render: () => (
        <div className='flex flex-col gap-2'>
            {(
                [
                    'primary',
                    'secondary',
                    'accent',
                    'info',
                    'success',
                    'warning',
                    'error',
                    'neutral',
                ] as Theme[]
            ).map((theme) => (
                <ChatBubble key={theme} theme={theme}>
                    {theme} bubble
                </ChatBubble>
            ))}
        </div>
    ),
};

export const WithCustomClass: Story = {
    args: {
        children: 'I have a custom class!',
        classname: 'shadow-lg text-lg',
        theme: 'info',
        position: 'end',
    },
};
