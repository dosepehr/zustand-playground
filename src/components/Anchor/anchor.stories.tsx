import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Anchor from './index';
import { AnchorProps } from './anchor.type';

const meta: Meta<typeof Anchor> = {
    title: 'components/Anchor',
    component: Anchor,
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
        showUnderlineOnlyOnHover: {
            control: 'boolean',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
    args: {
        children: 'Visit our homepage',
        href: '/',
        theme: 'primary',
        showUnderlineOnlyOnHover: false,
    },
};

export const UnderlineOnHover: Story = {
    args: {
        children: 'Hover me!',
        href: '/',
        theme: 'info',
        showUnderlineOnlyOnHover: true,
    },
};

export const AllThemes: Story = {
    render: (args) => (
        <div className='flex flex-col gap-2 w-fit'>
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
                ] as AnchorProps['theme'][]
            ).map((theme) => (
                <Anchor key={theme} {...args} theme={theme}>
                    {theme} link
                </Anchor>
            ))}
        </div>
    ),
    args: {
        href: '/',
        showUnderlineOnlyOnHover: false,
    },
};

