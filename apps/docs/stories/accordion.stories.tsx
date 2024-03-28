// import React, { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { Accordion } from '@exsui/ui';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        open: {
            control: 'boolean',
            description: 'Whether the accordion is open or closed',
        },
        icon: {
            control: 'object',
            description: 'Icon to display on the accordion',
        },
        animate: {
            description: 'Whether the accordion should animate when opening and closing',
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
            description: 'Whether the accordion is disabled',
            control: 'boolean',
        },
        className: {
            description: 'Class name to apply to the accordion',
            control: 'text',
        },
        items: {
            description: 'Accordion items',
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
    title: 'Data Display/Accordion',
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const accordion = canvas.getByRole('button', { name: /accordion item 1/i });
        userEvent.click(accordion);
        await canvas.findByText('Accordion Content 1');
    },
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
