import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Select from './index';
import { SelectProps } from './select.type';

const meta: Meta<typeof Select> = {
    title: 'components/Select',
    component: Select,
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
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

const baseOptions: SelectProps['options'] = {
    title: 'Select a fruit',
    options: [
        { title: 'Apple', value: 'apple' },
        { title: 'Banana', value: 'banana' },
        { title: 'Cherry', value: 'cherry' },
    ],
};

export const Default: Story = {
    args: {
        options: baseOptions,
        theme: 'primary',
        size: 'md',
    },
};

export const AllThemes: Story = {
    render: (args) => (
        <div className='flex flex-col gap-2 w-60'>
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
                ] as SelectProps['theme'][]
            ).map((theme) => (
                <Select key={theme} {...args} theme={theme} />
            ))}
        </div>
    ),
    args: {
        options: baseOptions,
        size: 'md',
    },
};

export const AllSizes: Story = {
    render: (args) => (
        <div className='flex flex-col gap-2 w-60'>
            {(['xs', 'sm', 'md', 'lg', 'xl'] as SelectProps['size'][]).map(
                (size) => (
                    <Select key={size} {...args} size={size} />
                )
            )}
        </div>
    ),
    args: {
        options: baseOptions,
        theme: 'info',
    },
};

