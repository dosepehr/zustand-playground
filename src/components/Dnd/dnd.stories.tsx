import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Dnd from '.';
const meta: Meta<typeof Dnd> = {
    title: 'Components/Dnd',
    component: Dnd,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'accent',
                'info',
                'success',
                'warning',
                'error',
                'neutral',
                'default',
            ],
        },
        showDetails: {
            control: 'boolean',
        },
        allowMultiple: {
            control: 'boolean',
        },
        enableDelete: {
            control: 'boolean',
        },
        enableDownload: {
            control: 'boolean',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Dnd>;

const defaultChildren = (
    <div className='text-white text-sm p-4'>
        <strong>Click or drop PDF file here</strong>
    </div>
);

export const SingleFileUpload: Story = {
    args: {
        children: defaultChildren,
        showDetails: true,
        theme: 'primary',
        maxFiles: 1,
        allowMultiple: false,
        enableDelete: true,
        enableDownload: true,
        onChange: (file) => console.log('Selected file:', file),
    },
};

export const MultipleFileUpload: Story = {
    args: {
        children: (
            <div className='text-white text-sm p-4'>
                <strong>Upload multiple PDF files</strong>
            </div>
        ),
        showDetails: true,
        theme: 'success',
        maxFiles: 5,
        allowMultiple: true,
        enableDelete: true,
        enableDownload: true,
        onChange: (files) => console.log('Files:', files),
    },
};

export const NoDetails: Story = {
    args: {
        children: (
            <div className='text-white p-4 text-center'>
                <strong>Upload file (no details shown)</strong>
            </div>
        ),
        showDetails: false,
        theme: 'info',
        maxFiles: 1,
        allowMultiple: false,
        enableDelete: false,
        enableDownload: false,
    },
};

export const CustomStyles: Story = {
    args: {
        children: (
            <div className='text-white text-center text-base py-6 px-2'>
                <strong>Stylish DND Area</strong>
            </div>
        ),
        showDetails: true,
        theme: 'secondary',
        classname:
            'rounded-xl border-4 border-dashed border-white min-h-[150px]',
        fileItemStyle: 'shadow-md border border-gray-200',
        maxFiles: 3,
        allowMultiple: true,
        enableDelete: true,
        enableDownload: true,
    },
};

export const DisabledDownloadDelete: Story = {
    args: {
        children: (
            <div className='text-white text-center py-4'>
                Drop a file – no delete/download allowed
            </div>
        ),
        showDetails: true,
        theme: 'neutral',
        maxFiles: 1,
        allowMultiple: false,
        enableDelete: false,
        enableDownload: false,
    },
};
