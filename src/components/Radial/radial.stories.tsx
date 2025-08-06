import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Radial from './index';
import { RadialProps } from './radial.type';

const meta: Meta<typeof Radial> = {
    title: 'components/Radial',
    component: Radial,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
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
            control: 'text',
        },
        thickness: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Radial>;

export const Default: Story = {
    args: {
        value: 65,
        theme: 'primary',
        size: '5rem',
        thickness: '0.5rem',
        children: '65%',
    },
};

export const AllThemes: Story = {
    render: (args) => (
        <div className='flex flex-wrap gap-4 items-center'>
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
                ] as RadialProps['theme'][]
            ).map((theme) => (
                <Radial key={theme} {...args} theme={theme} size='90px'>
                    {theme}
                </Radial>
            ))}
        </div>
    ),
    args: {
        value: 75,
        size: '4rem',
        thickness: '0.4rem',
    },
};

export const CustomSizes: Story = {
    render: (args) => (
        <div className='flex gap-4 items-end'>
            <Radial {...args} size='3rem' thickness='0.3rem'>
                40%
            </Radial>
            <Radial {...args} size='5rem' thickness='0.5rem'>
                60%
            </Radial>
            <Radial {...args} size='7rem' thickness='0.7rem'>
                90%
            </Radial>
        </div>
    ),
    args: {
        value: 60,
        theme: 'success',
    },
};

export const WithChildContent: Story = {
    args: {
        value: 88,
        theme: 'info',
        size: '6rem',
        thickness: '0.6rem',
        children: <span className='text-sm font-bold'>88%</span>,
    },
};
export const WithBackgroundAndBorder: Story = {
    args: {
        value: 46,
        theme: 'error',
        size: '6rem',
        thickness: '0.6rem',
        children: <span className='text-sm font-bold'>28 seconds</span>,
        classname: 'bg-accent text-primary-content border-accent border-4',
    },
};

