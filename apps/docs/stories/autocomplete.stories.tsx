import type { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from '@exsui/ui';

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
    args: {
        value: '',
        options: [
            'apple',
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
