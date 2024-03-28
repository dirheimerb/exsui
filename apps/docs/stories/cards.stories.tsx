import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';

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
    title: 'Data Display/Card',
    tags: ['components', 'Data Display', 'card', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const card = within(canvasElement).getByRole('article');
        userEvent.click(card);
    },
    render: (props) => <Card {...props} />,
    args: {
        children: 'Card content',
    },
};
