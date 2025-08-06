import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Progress from '.';
import { ProgressProps } from './progress.type';

const meta: Meta<typeof Progress> = {
    title: 'components/Progress',
    component: Progress,
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
    },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    args: {
        value: 40,
        theme: 'primary',
    },
};
export const AllThemes: Story = {
    render: () => (
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
                ] as ProgressProps['theme'][]
            ).map((theme) => (
                <div key={theme} className='flex flex-col w-full gap-y-2'>
                    <p>{theme}</p>
                    <Progress
                        theme={theme}
                        value={40}
                        classname='w-52'
                    ></Progress>
                </div>
            ))}
        </div>
    ),
};
