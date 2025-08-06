import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from '.';
import { ButtonProps } from './button.types';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    title: 'components/Button',
    component: Button,
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
        variant: {
            control: 'select',
            options: ['default', 'active', 'dash', 'outline', 'soft'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        shape: {
            control: 'select',
            options: ['default', 'block', 'circle', 'square', 'wide'],
        },
        isAnimated: {
            control: 'boolean',
        },
        isLoading: {
            control: 'boolean',
        },
        isDisabled: {
            control: 'boolean',
        },
        isLink: {
            control: 'boolean',
        },
    },
};

export default meta;

// === BASIC STORIES === //

export const Default: Story = {
    args: {
        children: 'Default Button',
        theme: 'primary',
        variant: 'default',
        size: 'md',
        shape: 'default',
        isAnimated: false,
        isDisabled: false,
        isLoading: false,
        isLink: false,
    },
};

export const Loading: Story = {
    args: {
        children: 'Loading Button',
        isLoading: true,
        loadingText: 'loading',
        theme: 'success',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        isDisabled: true,
        theme: 'neutral',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        variant: 'outline',
        theme: 'secondary',
    },
};

export const Circle: Story = {
    args: {
        children: 'C',
        shape: 'circle',
        theme: 'warning',
    },
};

export const BlockWide: Story = {
    args: {
        children: 'Block Button',
        shape: 'block',
        theme: 'error',
    },
};

// === GROUPED STORIES === //

export const AllThemes: Story = {
    render: (args) => (
        <div className='flex flex-wrap gap-3'>
            {(meta.argTypes?.theme?.options as ButtonProps['theme'][]).map(
                (theme) => (
                    <Button key={theme} {...args} theme={theme}>
                        {theme}
                    </Button>
                )
            )}
        </div>
    ),
    args: {
        children: 'Theme',
        variant: 'default',
        size: 'md',
    },
};

export const AllVariants: Story = {
    render: (args) => (
        <div className='flex flex-wrap gap-3'>
            {(meta.argTypes?.variant?.options as ButtonProps['variant'][]).map(
                (variant) => (
                    <Button key={variant} {...args} variant={variant}>
                        {variant}
                    </Button>
                )
            )}
        </div>
    ),
    args: {
        children: 'Variant',
        theme: 'primary',
        size: 'md',
    },
};

export const AllSizes: Story = {
    render: (args) => (
        <div className='flex flex-wrap gap-3 items-end'>
            {(meta.argTypes?.size?.options as ButtonProps['size'][]).map(
                (size) => (
                    <Button key={size} {...args} size={size}>
                        {size}
                    </Button>
                )
            )}
        </div>
    ),
    args: {
        children: 'Size',
        theme: 'info',
        variant: 'soft',
    },
};

export const AllShapes: Story = {
    render: (args) => (
        <div className='flex flex-wrap gap-3'>
            {(meta.argTypes?.shape?.options as ButtonProps['shape'][]).map(
                (shape) => (
                    <Button key={shape} {...args} shape={shape}>
                        {shape}
                    </Button>
                )
            )}
        </div>
    ),
    args: {
        theme: 'accent',
        variant: 'outline',
    },
};

