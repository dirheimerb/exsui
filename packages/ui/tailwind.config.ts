import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

const config: Config = {
    content: ['./index.ts', './src/**/*.{ts,tsx, js, jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#FF6363',
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883',
                },
            },
        },
    },
    plugins: [typography, forms],
};

export default config;
