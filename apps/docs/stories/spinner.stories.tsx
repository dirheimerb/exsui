import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { Spinner } from '@exsui/ui';

const meta: Meta<typeof Spinner> = {
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the spinner',
        },
        color: {
            control: 'select',
            options: ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'orange', 'black'],
            description: 'Color of the spinner',
        },
        show: {
            control: 'boolean',
            description: 'Whether the spinner should be visible',
        },
    },
    title: 'Feedback/Spinner',
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const spinner = canvas.getByRole('status');
        userEvent.click(spinner);
    },
    render: (props) => <Spinner {...props} />,
    args: {
        show: true,
        size: 'md',
    },
};
