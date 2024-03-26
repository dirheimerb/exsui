import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@exsui/ui';

const meta: Meta<typeof Badge> = {
    component: Badge,
    argTypes: {
        label: {
            control: 'text',
        },
        textColor: {
            control: 'select',
            options: [
                'black',
                'blue',
                'cyan',
                'gray',
                'green',
                'indigo',
                'lime',
                'orange',
                'pink',
                'purple',
                'red',
                'teal',
                'white',
                'yellow',
                'fuscia',
                'slate',
                'zinc',
                'neutral',
                'stone',
                'amber',
                'emerald',
                'sky',
            ],
        },
        backgroundColor: {
            control: 'select',
            options: [
                'black',
                'blue',
                'cyan',
                'gray',
                'green',
                'indigo',
                'lime',
                'orange',
                'pink',
                'purple',
                'red',
                'teal',
                'white',
                'yellow',
                'fuscia',
                'slate',
                'zinc',
                'neutral',
                'stone',
                'amber',
                'emerald',
                'sky',
            ],
        },
        // variant: {
        //     control: 'select',
        //     options: ['filled', 'outlined', 'text']
        // },
        // size: {
        //     control: 'select',
        //     options: ['sm', 'md', 'lg']
        // },
        // fullWidth: {
        //     control: 'boolean'
        // },
        // loading: {
        //     control: 'boolean'
        // },
        // disabled: {
        //     control: 'boolean'
        // },
        // rounded: {
        //     control: 'boolean'
        // }
    },
    title: 'Components/Badge',
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
    tags: ['components', 'badge', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        label: 'Badge',
        textColor: 'black',
        backgroundColor: 'gray',
    },
};
