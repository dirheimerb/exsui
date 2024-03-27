import { StoryObj, Meta } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Checkbox, CheckboxProps } from '@exsui/ui'; // Adjust the import path as necessary
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof Checkbox> = {
    title: 'Inputs/Checkbox',
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
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
    args: {
        // Default args for the story
    },
    render: function Render(args) {
        const [currentArgs, updateArgs] = useArgs();
        const handleChange = (checked: boolean) => {
            updateArgs({ ...currentArgs, checked });
            args.onChange(checked); // Trigger the action in Storybook's actions panel
        };

        return (
            <Checkbox
                {...args}
                checked={currentArgs.checked}
                onChange={handleChange}
            />
        );
    },
};
