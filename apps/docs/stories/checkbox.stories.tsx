import { StoryObj, Meta } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Checkbox } from '@exsui/ui'; // Adjust the import path as necessary
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof Checkbox> = {
    title: 'Input/Checkbox',
    component: Checkbox,
    args: {
        id: 'storybook-checkbox',
        label: 'Check Me!',
        checked: false,
    },
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Indicates whether the checkbox is checked',
        },
        label: {
            control: 'text',
            description: 'The label text for the checkbox',
        },
        onChange: {
            action: 'changed',
            description: 'Function to call when the checkbox state changes',
        },
    },
    decorators: [
        (Story) => (
            <div className="p-4">
                <Story />
            </div>
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByRole('checkbox');
        userEvent.click(checkbox);
        await canvas.findByText('Check Me!');
    },
    args: {
        id: 'storybook-checkbox',
        label: 'Check Me!',
        checked: false,
    },

    render: (props) => <Checkbox {...props} />,
};
