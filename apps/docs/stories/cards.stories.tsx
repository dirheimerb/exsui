import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@exsui/ui';

const meta: Meta<typeof Card> = {
    component: Card,

    argTypes: {
        children: {
            control: 'text',
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
    title: 'Components/Card',
    tags: ['components', 'card', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        children: 'Card content',
    },
};
