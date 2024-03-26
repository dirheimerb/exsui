// import React, { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@exsui/ui';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
        },
        icon: {
            control: 'object',
        },
        animate: {
            control: {
                unmount: {
                    height: 'string',
                    transition: { duration: 'number', times: 'number[]' },
                },
                mount: {
                    height: 'string',
                    transition: { duration: 'number', times: 'number[]' },
                },
            },
        },
        disabled: {
            control: 'boolean',
        },
        className: {
            control: 'text',
        },
        items: {
            title: 'string',
            content: 'ReactNode',
            className: 'string',
            contentClassName: 'string',
        },
    },
    decorators: [
        (Story) => (
            <div className="p-4">
                <Story />
            </div>
        ),
    ],
    parameters: {
        controls: { expanded: true },
    },
    title: 'Components/Accordion',
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
    args: {
        open: false,
        items: [
            {
                title: 'Accordion Item 1',
                content: <div>Accordion Content 1</div>,
            },
            {
                title: 'Accordion Item 2',
                content: <div>Accordion Content 2</div>,
            },
            {
                title: 'Accordion Item 3',
                content: <div>Accordion Content 3</div>,
            },
        ],
    },
};
