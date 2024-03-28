import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { EmailValidation } from '@exsui/ui';

const meta: Meta<typeof EmailValidation> = {
    component: EmailValidation,
    tags: ['autodocs'],
    argTypes: {
        email: {
            control: 'text',
            description: 'The value of the email field',
        },
        setEmail: {
            action: 'changed',
            description: 'Function to call when the email field changes',
        },
        isValid: {
            control: 'boolean',
            description: 'Whether the email is valid',
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
    title: 'Input/EmailValidation',
};

export default meta;

type Story = StoryObj<typeof EmailValidation>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const emailField = within(canvasElement).getByRole('textbox');
        userEvent.type(emailField, 'Email');
    },
    render: (props) => <EmailValidation {...props} />,
    args: {
        email: 'Email',
        setEmail: (newValue) => console.log('New value:', newValue),
        isValid: true,
    },
};
