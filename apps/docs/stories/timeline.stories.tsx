import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { Timeline } from '@exsui/ui';

const meta: Meta<typeof Timeline> = {
    component: Timeline,
    argTypes: {
        items: {
            control: 'object',
        },
    },
    title: 'Data Display/Timeline',
    parameters: {
        controls: { expanded: true },
    },
    tags: ['components', 'Data Display', 'timeline', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const timeline = canvas.getByRole('list');
        userEvent.click(timeline);
    },
    render: (props) => <Timeline />,
    args: {
        items: [
            {
                date: '2021-10-01',
                title: 'First item',
                description: 'First item description',
            },
            {
                date: '2021-10-02',
                title: 'Second item',
                description: 'Second item description',
            },
            {
                date: '2021-10-03',
                title: 'Third item',
                description: 'Third item description',
            },
        ],
    },
};
