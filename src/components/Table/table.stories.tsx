import Table from '.';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import TCell from './TCell';
import Tr from './Tr';

type Story = StoryObj<typeof Table>;

const meta: Meta<typeof Table> = {
    title: 'components/Table',
    component: Table,
};

export default meta;

export const Default: Story = {
    render: () => (
        <Table headData={['#', 'name']}>
            <Tr>
                <TCell>1</TCell>
                <TCell>Sepehr</TCell>
            </Tr>
            <Tr>
                <TCell>1</TCell>
                <TCell>Ali</TCell>
            </Tr>
        </Table>
    ),
};
