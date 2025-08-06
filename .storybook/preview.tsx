import React from 'react';
import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';
import { Lato } from 'next/font/google';

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    display: 'swap',
    variable: '--font-lato',
});

export const decorators = [
    (Story) => {
        if (typeof document !== 'undefined') {
            document.body.classList.add(lato.variable);
        }
        return <Story />;
    },
];

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: 'todo',
        },
    },
};

export default preview;

