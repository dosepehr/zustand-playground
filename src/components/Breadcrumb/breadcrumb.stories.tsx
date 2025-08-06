import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Breadcrumb from '.';
import { BreadcrumbProps } from './breadcrumb.type';

type Story = StoryObj<typeof Breadcrumb>;

const meta: Meta<typeof Breadcrumb> = {
    title: 'components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
};

export default meta;

// === SAMPLE DATA === //

const breadcrumbData1: BreadcrumbProps[] = [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Settings', link: '/dashboard/settings' },
    { title: 'Profile', link: '/dashboard/settings/profile' },
];
// === STORIES === //

export const Default: Story = {
    args: {
        breadcrumb: breadcrumbData1,
    },
};
