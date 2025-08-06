import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Collapse from '.';

type Story = StoryObj<typeof Collapse>;

const meta: Meta<typeof Collapse> = {
    title: 'components/Collapse',
    component: Collapse,
    tags: ['autodocs'],
};

export default meta;

export const Default: Story = {
    args: {
        title: 'Collapse title',
        content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ullam et earum, eius quia veniam aliquid vitae non voluptatem nemo, nobis in aspernatur temporibus adipisci atque sit. Atque, saepe magnam.',
    },
    render: () => {
        return (
            <div className='space-y-4'>
                <Collapse
                    title={'Collapse title 1'}
                    content={
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ullam et earum, eius quia veniam aliquid vitae non voluptatem nemo, nobis in aspernatur temporibus adipisci atque sit. Atque, saepe magnam.'
                    }
                />
                <Collapse
                    title={'Collapse title 2'}
                    content={
                        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ullam et earum, eius quia veniam aliquid vitae non voluptatem nemo, nobis in aspernatur temporibus adipisci atque sit. Atque, saepe magnam.'
                    }
                />
            </div>
        );
    },
};

