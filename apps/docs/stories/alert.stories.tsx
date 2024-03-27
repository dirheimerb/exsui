import { StoryObj, Meta } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Alert } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';


const meta: Meta<typeof Alert> = {
    component: Alert,
    argTypes: {
        color: {
            control: 'select',
            options: ['blue', 'green', 'red', 'yellow'],
            description: 'Color of the alert',
            defaultValue: 'blue',
        },
        rounded: {
            control: 'boolean',
            description: 'Rounded corners of the alert',
            defaultValue: false,
        },
        pill: {
            control: 'boolean',
            description: 'Pill shape of the alert',
            defaultValue: false,
        },
        link: {
            control: 'text',
            description: 'Link of the alert',
        },
    },
    title: 'Components/Alert',
    tags: ['components', 'alert', 'autodocs'],
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
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const alert = within(canvasElement).getByRole('alert');
        userEvent.click(alert);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    },

    render: (props) => <Alert {...props}>This is an alert</Alert>,
    args: {
        color: 'blue',
        rounded: false,
        pill: false,
        link: '',
    },
};
