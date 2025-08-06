import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Skeleton from '.';

const meta: Meta<typeof Skeleton> = {
    title: 'components/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    render: () => {
        return <Skeleton classname='w-20 h-20' />;
    },
};
export const Multiple: Story = {
    render: () => (
        <div className='flex gap-4 items-center'>
            <Skeleton classname='w-20 h-4' />
            <Skeleton classname='rounded-full w-20 h-4' />
        </div>
    ),
};
