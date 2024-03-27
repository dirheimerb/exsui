import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import {AutoComplete} from '@exsui/ui';



const meta: Meta<typeof AutoComplete> = {
    component: AutoComplete,
    argTypes: {
        value: {
            control: 'text',
        },
        options: {
            control: 'object',
        },
        onChange: {
            action: 'onChange',
        },
    },
    title: 'Components/AutoComplete',
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

type Story = StoryObj<typeof AutoComplete>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('combobox');
        userEvent.type(input, 'a');

        userEvent.type(input, 'p');
    },
    args: {
        value: '',
        options: [
            'Apple',
            'banana',
            'cherry',
            'date',
            'elderberry',
            'fig',
            'grape',
            'honeydew',
            'kiwi',
            'lemon',
            'mango',
            'nectarine',
            'orange',
            'pear',
            'quince',
            'raspberry',
            'strawberry',
            'tangerine',
            'ugli',
            'watermelon',
        ],
    },
};
