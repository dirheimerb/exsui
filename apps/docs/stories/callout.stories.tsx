import { userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from '@exsui/ui';

const meta: Meta<typeof Callout> = {
    component: Callout,
    argTypes: {
        title: {
            control: 'text',
            description: 'Title of the callout',
        },
        children: {
            control: 'text',
            description: 'Content of the callout',
        },
        type: {
            control: 'select',
            options: ['note', 'warning'],
            description: 'Type of callout',
            defaultValue: 'info',
        },
    },
    title: 'Feedback/Callout',
    tags: ['components', 'callout', 'autodocs'],
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

type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const span = canvas.getByText('Callout');
        console.log(span);
        await canvas.findByText('Callout');
    },

    args: {
        title: 'Callout',
        children: 'This is a callout',
        type: 'note',
    },
};
