import React from 'react';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';
import { toast } from 'sonner';
import ToastContainer from './ToastContainer';
import Button from '../Button';

const meta: Meta<typeof ToastContainer> = {
    title: 'components/Toast',
    component: ToastContainer,
    decorators: [
        (Story, context) => (
            <div
                style={{
                    padding: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Story {...context.args} />
            </div>
        ),
    ],
};

export default meta;
export const Toasts: StoryFn = () => {
    return (
        <>
            <ToastContainer />
            <div style={{ display: 'flex', gap: '1rem', marginTop: 20 }}>
                <Button
                    theme='default'
                    onClick={() => toast('This is a default toast')}
                >
                    Default Toast
                </Button>
                <Button
                    theme='success'
                    onClick={() => toast.success('Success toast!')}
                >
                    Success Toast
                </Button>
                <Button
                    theme='error'
                    onClick={() => toast.error('Error toast!')}
                >
                    Error Toast
                </Button>
                <Button
                    theme='primary'
                    onClick={() => toast.loading('Loading toast...')}
                >
                    Loading Toast
                </Button>
                <Button
                    theme='info'
                    onClick={() => toast.info('Loading toast...')}
                >
                    Info Toast
                </Button>
            </div>
        </>
    );
};
