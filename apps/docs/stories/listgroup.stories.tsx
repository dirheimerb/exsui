import type { Meta, StoryObj } from '@storybook/react';
import { ListGroup } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof ListGroup> = {
    component: ListGroup,
    argTypes: {
        items: {
            control: 'object',
        },
        className: {
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
    tags: ['components', 'listgroup', 'autodocs'],
    title: 'Data Display/ListGroup',
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

type Story = StoryObj<typeof ListGroup>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const span = canvas.getByText('Item 1');
        const span2 = canvas.getByText('Item 2');
        const span3 = canvas.getByText('Item 3');

        userEvent.click(span);
        userEvent.click(span2);
        userEvent.click(span3);

        await canvas.findByText('Item 1');
        await canvas.findByText('Item 2');
        await canvas.findByText('Item 3');
    },

    args: {
        items: [
            {
                label: 'Item 1',
                value: 'Description 1',
            },
            {
                label: 'Item 2',
                value: 'Description 2',
            },
            {
                label: 'Item 3',
                value: 'Description 3',
            },
        ],
    },
};
