import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Editor from '.';

const meta: Meta<typeof Editor> = {
    title: 'components/Editor',
    component: Editor,
};

export default meta;

type Story = StoryObj<typeof Editor>;

export const Default: Story = {
    render: () => <Editor />,
};

