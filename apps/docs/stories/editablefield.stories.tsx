import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { EditableTextField } from '@exsui/ui';

const meta: Meta<typeof EditableTextField> = {
    component: EditableTextField,
    tags: ['autodocs'],
    argTypes: {
        initialValue: {
            control: 'text',
            description: 'The value of the text field',
        },
        onSave: {
            action: 'changed',
            description: 'Function to call when the text field changes',
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
    title: 'Inputs/EditableTextField',
};

export default meta;

type Story = StoryObj<typeof EditableTextField>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const textField = within(canvasElement).getByRole('textbox');
        userEvent.type(textField, 'New text');
    },
    render: (props) => <EditableTextField {...props} />,
    args: {
        initialValue: 'Initial value',
        onSave: (newValue) => console.log('New value:', newValue),
    },
};