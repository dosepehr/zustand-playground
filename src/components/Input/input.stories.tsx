import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from '.';
import { Size, Theme } from '@/utils/types/components/component-base.type';
import { FiSearch } from 'react-icons/fi';

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

const meta: Meta<typeof Input> = {
    title: 'components/Input',
    component: Input,
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
        type: {
            control: 'text',
        },
        placeholder: {
            control: 'text',
        },
        isAnimated: {
            control: 'boolean',
        },
        animatedText: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Enter something...',
        theme: 'primary',
        size: 'md',
    },
};

export const AllThemes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '1rem', maxWidth: 400 }}>
            {themes.map((theme) => (
                <Input
                    key={theme}
                    placeholder={theme}
                    theme={theme}
                    size='md'
                />
            ))}
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '1rem', maxWidth: 400 }}>
            {sizes.map((size) => (
                <Input
                    key={size}
                    placeholder={`Size: ${size}`}
                    size={size}
                    theme='primary'
                />
            ))}
        </div>
    ),
};

export const AnimatedLabel: Story = {
    args: {
        placeholder: 'Your email',
        isAnimated: true,
        animatedText: 'Email address',
        theme: 'info',
        size: 'md',
    },
};

export const WithIcon: Story = {
    render: () => (
        <div className='space-y-4'>
            <Input
                placeholder='Search...'
                icon={<FiSearch className='text-xl text-neutral' />}
                theme='neutral'
                size='md'
            />
            <Input
                placeholder='Search...'
                icon={<FiSearch className='text-xl text-neutral' />}
                theme='neutral'
                size='md'
                dir='ltr'
                iconReverse
            />
        </div>
    ),
};

export const Number: Story = {
    args: {
        placeholder: 'Age',
        theme: 'neutral',
        size: 'md',
        type: 'number',
    },
};

