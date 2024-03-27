import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@exsui/ui';
import React from 'react';
import { userEvent, within } from '@storybook/test';

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
            description: 'Color of the button',
            defaultValue: 'blue',
        },
        children: {
            control: 'text',
            description: 'Content of the button',
        },
        style: {
            control: 'object',
            description: 'Style of the button',
        },
        variant: {
            control: 'select',
            options: ['filled', 'outlined', 'text'],
            description: 'Variant of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the button',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Full width of the button',
        },
        loading: {
            control: 'boolean',
            description: 'Loading state of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state of the button',
        },
        rounded: {
            control: 'boolean',
            description: 'Rounded state of the button',
        },
        pill: {
            control: 'boolean',
            description: 'Pill state of the button',
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            description: 'Type of the button',
        },
        Motion: {
            control: 'boolean',
            description: 'Motion state of the button',
        },
        exit: {
            control: 'object',
            description: 'Exit state of the button',
        },
        transition: {
            control: 'object',
            description: 'Transition state of the button',
        },
        initial: {
            control: 'object',
            description: 'Initial state of the button',
        },
        animate: {
            control: 'object',
            description: 'Animate state of the button',
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
    play: async ({ canvasElement }) => {
        const button = within(canvasElement).getByRole('button');
        userEvent.click(button);
    },
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
