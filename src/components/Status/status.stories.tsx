import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Status from '.';
import { Theme, Size } from '@/utils/types/components/component-base.type';
import { Animation } from './status.type';

const meta: Meta<typeof Status> = {
    title: 'components/Status',
    component: Status,
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
        animate: {
            control: 'select',
            options: ['none', 'bounce', 'ping', 'pulse'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Default: Story = {
    args: {
        theme: 'primary',
        size: 'md',
        animate: 'none',
    },
};

export const AllThemes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
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
                <div key={theme} style={{ textAlign: 'center' }}>
                    <Status theme={theme as Theme} />
                    <div>{theme}</div>
                </div>
            ))}
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16 }}>
            {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
                <div key={size} style={{ textAlign: 'center' }}>
                    <Status size={size as Size} />
                    <div>{size}</div>
                </div>
            ))}
        </div>
    ),
};

export const AllAnimations: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16 }}>
            {['none', 'bounce', 'ping', 'pulse'].map((anim) => (
                <div key={anim} style={{ textAlign: 'center' }}>
                    <Status animate={anim as Animation} />
                    <div>{anim}</div>
                </div>
            ))}
        </div>
    ),
};

