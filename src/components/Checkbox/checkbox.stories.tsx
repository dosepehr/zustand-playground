import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Checkbox from '.';
import { CheckboxProps } from './checkbox.type';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
    title: 'components/Checkbox',
    component: Checkbox,
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
        rightLabel: {
            control: 'boolean',
        },
        defaultChecked: {
            control: 'boolean',
        },
    },
};

export default meta;

// === STORIES === //

export const Default: Story = {
    args: {
        label: 'Accept Terms',
        theme: 'primary',
        size: 'md',
        rightLabel: false,
        defaultChecked: false,
    },
};

export const DefaultChecked: Story = {
    args: {
        label: 'I agree',
        theme: 'success',
        defaultChecked: true,
    },
};
export const ForceChecked: Story = {
    args: {
        label: 'I am forced to agree',
        theme: 'success',
        checked: true,
    },
};

export const RightLabel: Story = {
    args: {
        label: 'Right Label',
        rightLabel: true,
        theme: 'secondary',
    },
};

export const AllThemes: Story = {
    render: () => (
        <div className='space-y-2'>
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
                <Checkbox
                    key={theme}
                    label={theme}
                    theme={theme as CheckboxProps['theme']}
                    defaultChecked
                />
            ))}
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div className='flex gap-4 items-center'>
            {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
                <Checkbox
                    key={size}
                    label={size}
                    size={size as CheckboxProps['size']}
                />
            ))}
        </div>
    ),
};

