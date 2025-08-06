import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Divider from '.';
import { DividerProps } from './divider.type';

type Story = StoryObj<typeof Divider>;

const meta: Meta<typeof Divider> = {
    title: 'components/Divider',
    component: Divider,
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
    },
};

export default meta;

export const Default: Story = {
    args: {
        children: 'Default',
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
                <Divider key={theme} theme={theme as DividerProps['theme']}>
                    {theme}
                </Divider>
            ))}
        </div>
    ),
};
export const Horizontal: Story = {
    render: () => (
        <div className='flex w-full'>
            <div className='card bg-base-300 rounded-box grid h-20 grow place-items-center'>
                content
            </div>
            <Divider theme='info' orientation='horizontal'>
                OR
            </Divider>
            <div className='card bg-base-300 rounded-box grid h-20 grow place-items-center'>
                content
            </div>
        </div>
    ),
};

export const AllPositions: Story = {
    render: () => (
        <div className='space-y-2'>
            {['start', 'center', 'end'].map((position) => (
                <Divider
                    key={position}
                    theme={'success'}
                    position={position as DividerProps['position']}
                    classname='text-green-400'
                >
                    {position}
                </Divider>
            ))}
        </div>
    ),
};

