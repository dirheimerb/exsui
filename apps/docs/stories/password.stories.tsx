import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { Password } from '@exsui/ui';

const meta: Meta<typeof Password> = {
    component: Password,
    argTypes: {
        value: {
            control: 'text',
        },
        onChange: {
            action: 'onChange',
        },
    },
    title: 'Input/Password',
    parameters: {
        controls: { expanded: true },
    },
    decorators: [
        (Story) => (
            <div className="p-4">
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByTestId('password-toggle');
        const button = canvas.queryAllByRole('button')[0];

        userEvent.type(input, 'password');
        userEvent.click(button);
    },
    args: {
        value: '',
        onChange: () => {},
    },
};
