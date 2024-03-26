import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@exsui/ui';
import React from 'react';

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        color: {
            control: 'select',
            options: [
                'black',
                'blue',
                'cyan',
                'gray',
                'green',
                'indigo',
                'lime',
                'orange',
                'pink',
                'purple',
                'red',
                'teal',
                'white',
                'yellow',
                'fuscia',
                'slate',
                'zinc',
                'neutral',
                'stone',
                'amber',
                'emerald',
                'sky',
            ],
        },
        children: {
            control: 'text',
        },
        style: {
            control: 'object',
        },
        variant: {
            control: 'select',
            options: ['filled', 'outlined', 'text'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        fullWidth: {
            control: 'boolean',
        },
        loading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        rounded: {
            control: 'boolean',
        },
        pill: {
            control: 'boolean',
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
        },
        Motion: {
            control: 'boolean',
        },
        exit: {
            control: 'object',
        },
        transition: {
            control: 'object',
        },
        initial: {
            control: 'object',
        },
        animate: {
            control: 'object',
        },
    },
    parameters: {
        controls: { expanded: true },
    },
    title: 'Components/Button',
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['components', 'button', 'autodocs'],
    args: {
        color: 'blue',
        children: 'Hello',
        type: 'button',
        variant: 'filled',
        size: 'md',
        fullWidth: false,
        loading: false,
        disabled: false,
        rounded: false,
        pill: false,
        Motion: false,
        exit: {
            scale: 0.5,
            x: 0,
            y: 0,
            opacity: 0,
        },
        transition: {
            duration: 0.5,
        },
        initial: {
            scale: 0.5,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
        },
        style: {
            color: 'blue',
            border: '1px solid gray',
            padding: 10,
            borderRadius: 10,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (props) => (
        <Button
            {...props}
            onClick={(): void => {
                console.log('Button clicked');
            }}>
            {props.children}
        </Button>
    ),
    name: 'Button',
    args: {
        children: 'Hello',
        type: 'button',
        variant: 'filled',
        size: 'md',
        fullWidth: false,
        loading: false,
        disabled: false,
        rounded: false,
        pill: false,
        Motion: false,
        exit: {
            scale: 0.5,
            x: 0,
            y: 0,
            opacity: 0,
        },
        transition: {
            duration: 0.5,
        },
        initial: {
            scale: 0.5,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
        },

        style: {
            color: 'blue',
            border: '1px solid gray',
            padding: 10,
            borderRadius: 10,
        },
    },
};
