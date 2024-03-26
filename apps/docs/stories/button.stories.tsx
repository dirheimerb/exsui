import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@exsui/ui';
import React from 'react';

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        children: { control: 'text' },
        style: { control: 'object' },
        type: { control: 'text' },
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
            }}
        >
            {props.children}
        </Button>
    ),
    name: 'Button',
    args: {
        children: 'Hello',
        type: 'button',
        style: {
            color: 'blue',
            border: '1px solid gray',
            padding: 10,
            borderRadius: 10,
        },
    },
};
