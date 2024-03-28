import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { TextField } from '@exsui/ui';

const meta: Meta<typeof TextField> = {
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            defaultValue: 'Hello, World!',
            description: 'Text to display in the text field',
        },
        variant: {
            control: 'radio',
            options: ['filled', 'outlined', 'text', 'underlined'],
            description: 'Variant of the text field',
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the text field',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Whether the text field should take up the full width of its container',
        },
        rounded: {
            control: 'boolean',
            description: 'Whether the text field should have rounded corners',
        },
        pill: {
            control: 'boolean',
            description: 'Whether the text field should have pill-shaped corners',
        },
        className: {
            control: 'text',
            description: 'Additional classes to apply to the text field',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the text field should be disabled',
        },
        backgroundColor: {
            control: 'color',
            description: 'Background color of the text field',
        },
        textColor: {
            control: 'color',
            description: 'Text color of the text field',
        },
        ringColor: {
            control: 'color',
            description: 'Ring color of the text field',
        },
        focusColor: {
            control: 'color',
            description: 'Focus color of the text field',
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
    title: 'Data Display/TextField',
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await canvas.findAllByRole('textbox');
    },
    args: {
        variant: 'filled',
        size: 'md',
        fullWidth: false,
        rounded: false,
        pill: false,
        disabled: false,
        backgroundColor: 'gray',
        textColor: 'white',
        ringColor: 'gray',
        focusColor: 'gray',
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Text to display in the text field',
        },
        id: {
            control: 'text',
            description: 'ID of the text field',
        },
        role: {
            control: 'text',
            description: 'Role of the text field',
        },
        'aria-describedby': {
            control: 'text',
            description: 'ID of the element that describes the text field',
        },
    },
    parameters: {
        docs: {
            source: {
                type: 'code',
            },
        },
    },
};
