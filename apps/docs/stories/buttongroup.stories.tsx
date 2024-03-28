import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { ButtonGroup } from '@exsui/ui';

const meta: Meta<typeof ButtonGroup> = {
    component: ButtonGroup,
    argTypes: {
        leftChild: {
            control: 'text',
            description: 'Content of the left button',
        },
        centerChild: {
            control: 'text',
            description: 'Content of the center button',
        },
        rightChild: {
            control: 'text',
            description: 'Content of the right button',
        },
        iconOnly: {
            control: 'boolean',
            description: 'Display only icons',
        },
        leftClick: {
            action: 'leftClick',
            description: 'Function to be called on left button click',
        },
        centerClick: {
            action: 'centerClick',
            description: 'Function to be called on center button click',
        },
        rightClick: {
            action: 'rightClick',
            description: 'Function to be called on right button click',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'ButtonGroup is a component that groups buttons together.',
            },
        },
    },
    tags: ['autodocs', 'button', 'group'],
    title: 'Input/ButtonGroup',
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
    render: (props) => <ButtonGroup {...props} />,
    args: {
        leftChild: 'Previous',
        centerChild: 'Center',
        rightChild: 'Next',
    },
    play: async ({ canvasElement }) => {
        const prevButtonGroup = within(canvasElement).getByRole('group', { name: 'Previous' });
        const centerButtonGroup = within(canvasElement).getByRole('group', { name: 'Center' });
        const nextButtonGroup = within(canvasElement).getByRole('group', { name: 'Next' });

        userEvent.click(prevButtonGroup);
        userEvent.click(centerButtonGroup);
        userEvent.click(nextButtonGroup);
    },
};
