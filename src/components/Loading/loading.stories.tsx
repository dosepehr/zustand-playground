import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Loading from '.';
import { LoadingType } from '@/utils/types/components/loading-behavior.type';
import { Size, Theme } from '@/utils/types/components/component-base.type';

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

const types: LoadingType[] = [
    'spinner',
    'ring',
    'ball',
    'bars',
    'dots',
    'infinity',
];

const meta: Meta<typeof Loading> = {
    title: 'components/Loading',
    component: Loading,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: types,
        },
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
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
    args: {
        type: 'spinner',
        theme: 'primary',
        size: 'md',
    },
};

export const AllThemes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {themes.map((theme) => (
                <div key={theme} style={{ textAlign: 'center' }}>
                    <Loading type='spinner' theme={theme} />
                    <div style={{ fontSize: 12 }}>{theme}</div>
                </div>
            ))}
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {sizes.map((size) => (
                <div key={size} style={{ textAlign: 'center' }}>
                    <Loading type='spinner' size={size} theme='primary' />
                    <div style={{ fontSize: 12 }}>{size}</div>
                </div>
            ))}
        </div>
    ),
};

export const AllTypes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {types.map((type) => (
                <div key={type} style={{ textAlign: 'center' }}>
                    <Loading type={type} theme='info' size='md' />
                    <div style={{ fontSize: 12 }}>{type}</div>
                </div>
            ))}
        </div>
    ),
};

