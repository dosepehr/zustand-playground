import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Alert from './index';
import { AlertProps } from './alert.type';
import { FiSearch } from 'react-icons/fi';
import Button from '../Button';

const meta: Meta<typeof Alert> = {
    title: 'components/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: ['default', 'error', 'info', 'success', 'warning'],
        },
        variant: {
            control: 'select',
            options: ['default', 'dash', 'outline', 'soft'],
        },
        isResponsive: {
            control: 'boolean',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        children: 'This is an alert',
        theme: 'default',
        variant: 'default',
    },
};

export const AllThemes: Story = {
    render: (args) => (
        <div className='flex flex-col gap-2'>
            {(
                [
                    'default',
                    'error',
                    'info',
                    'success',
                    'warning',
                ] as AlertProps['theme'][]
            ).map((theme) => (
                <Alert key={theme} {...args} theme={theme}>
                    {theme} alert
                </Alert>
            ))}
        </div>
    ),
    args: {
        variant: 'default',
    },
};

export const AllVariants: Story = {
    render: (args) => (
        <div className='flex flex-col gap-2'>
            {(
                [
                    'default',
                    'dash',
                    'outline',
                    'soft',
                ] as AlertProps['variant'][]
            ).map((variant) => (
                <Alert key={variant} {...args} variant={variant}>
                    {variant} alert
                </Alert>
            ))}
        </div>
    ),
    args: {
        theme: 'info',
    },
};

export const WithIcon: Story = {
    args: {
        children: 'This alert includes an icon!',
        theme: 'success',
        variant: 'soft',
        icon: <FiSearch />,
    },
};

export const WithActions: Story = {
    render: (args) => (
        <Alert {...args} icon={<FiSearch />} theme='info' variant='default'>
            <span className='flex-1'>We use cookies for no reason.</span>
            <div className='space-x-2'>
                <Button size='sm' theme='error'>
                    Deny
                </Button>
                <Button size='sm' theme='success'>
                    Accept
                </Button>
            </div>
        </Alert>
    ),
    args: {},
};

