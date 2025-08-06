'use client';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Theme } from '@/utils/types/components/component-base.type';
import classNames from 'classnames';
import { DndProps } from './dnd';
import Button from '../Button';

const Dnd: React.FC<DndProps> = ({
    onChange = () => {},
    showDetails = false,
    children,
    classname,
    fileItemStyle,
    theme = 'primary',
    accept = { 'application/pdf': ['.pdf'] },
    maxFiles = 1,
    allowMultiple = false,
    enableDownload = true,
    enableDelete = true,
    ...rest
}) => {
    const [files, setFiles] = useState<Array<File & { index: number }>>([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        multiple: allowMultiple,
        maxFiles,
        onDrop: (acceptedFiles) => {
            const newFiles = acceptedFiles.map((file, index) =>
                Object.assign(file, { index }),
            );
            setFiles(newFiles);
            onChange(allowMultiple ? acceptedFiles : acceptedFiles[0]);
        },
        ...rest,
    });

    const uploadedFiles = files.map((file, i) => ({
        index: i,
        name: file.name,
        size: file.size / 1000,
        file: file,
    }));

    const deleteFile = (id: number) => {
        const updatedFiles = files.filter((_, i) => i !== id);
        setFiles(updatedFiles);
        onChange(allowMultiple ? updatedFiles.map((f) => f as File) : null);
    };

    const downloadFile = (id: number) => {
        const fileToDownload = files[id];
        if (fileToDownload) {
            const url = URL.createObjectURL(fileToDownload);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileToDownload.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };

    const themeClasses: Record<Theme, string> = {
        accent: 'bg-accent',
        error: 'bg-error',
        info: 'bg-info',
        neutral: 'bg-neutral',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-success',
        warning: 'bg-warning',
        default: '',
    };

    const dndClasses = classNames(themeClasses[theme], classname);
    const detailsClasses = classNames(
        'bg-white py-3 px-4 rounded flex items-center justify-between',
        fileItemStyle,
    );
    return (
        <section className='cursor-pointer'>
            <div {...getRootProps()} className={dndClasses}>
                <input {...getInputProps()} />
                {children}
            </div>

            {showDetails && uploadedFiles.length > 0 && (
                <aside className='mt-5 space-y-2'>
                    {uploadedFiles.map((file) => (
                        <div
                            key={file.name}
                            className={detailsClasses}
                            dir='ltr'
                        >
                            <div className='flex flex-col'>
                                <p className='text-primary font-bold'>
                                    {file.name}
                                </p>
                                <p className='text-gray-500 text-xs font-semibold'>
                                    {file.size.toFixed(2)} KB
                                </p>
                            </div>

                            <div className='flex gap-3'>
                                {enableDelete && (
                                    <Button
                                        onClick={() => deleteFile(file.index)}
                                        theme='error'
                                        variant='soft'
                                    >
                                        Delete
                                    </Button>
                                )}
                                {enableDownload && (
                                    <Button
                                        onClick={() => downloadFile(file.index)}
                                        theme='info'
                                        variant='soft'
                                    >
                                        Download
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                </aside>
            )}
        </section>
    );
};

export default Dnd;
