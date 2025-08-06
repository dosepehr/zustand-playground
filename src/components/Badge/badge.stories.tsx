import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Badge from './index';
import { BadgeProps } from './badge.type';

const meta: Meta<typeof Badge> = {
    title: 'components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['dash', 'outline', 'soft'],
        },
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
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'outline',
        size: 'md',
        theme: 'primary',
    },
};

export const AllVariants: Story = {
    render: (args) => (
        <div className='flex gap-2'>
            {(['dash', 'outline', 'soft'] as BadgeProps['variant'][]).map(
                (variant) => (
                    <Badge key={variant} {...args} variant={variant}>
                        {variant} badge
                    </Badge>
                )
            )}
        </div>
    ),
    args: {
        size: 'md',
        theme: 'info',
    },
};

export const AllThemes: Story = {
    render: (args) => (
        <div className='flex flex-wrap gap-2'>
            {(
                [
                    'default',
                    'primary',
                    'secondary',
                    'accent',
                    'info',
                    'success',
                    'warning',
                    'error',
                    'neutral',
                ] as BadgeProps['theme'][]
            ).map((theme) => (
                <Badge key={theme} {...args} theme={theme}>
                    {theme}
                </Badge>
            ))}
        </div>
    ),
    args: {
        size: 'md',
        variant: 'outline',
    },
};

export const AllSizes: Story = {
    render: (args) => (
        <div className='flex flex-wrap gap-2 items-end'>
            {(['xs', 'sm', 'md', 'lg', 'xl'] as BadgeProps['size'][]).map(
                (size) => (
                    <Badge key={size} {...args} size={size}>
                        {size}
                    </Badge>
                )
            )}
        </div>
    ),
    args: {
        variant: 'soft',
        theme: 'success',
    },
};

