import type { Preview } from '@storybook/react';
import './index.css';

export const parameters: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default parameters;
