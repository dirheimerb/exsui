import { StoryObj, Meta } from '@storybook/react';
import { Rating } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof Rating> = {
    component: Rating,
    argTypes: {
        value: {
            control: 'number',
            description: 'Rating value',
            defaultValue: 3,
        },
        max: {
            control: 'number',
            description: 'Maximum rating value',
            defaultValue: 5,
        },
        className: {
            control: 'text',
            description: 'Additional class name',
        },
        style: {
            control: 'object',
            description: 'Additional styles',
        },
    },
    title: 'Input/Rating',
    tags: ['components', 'input', 'rating', 'autodocs'],
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

type Story = StoryObj<typeof Rating>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button0 = canvas.queryAllByRole('button')[0];
        const button1 = canvas.queryAllByRole('button')[1];
        const button2 = canvas.queryAllByRole('button')[2];
        const button3 = canvas.queryAllByRole('button')[3];
        const button4 = canvas.queryAllByRole('button')[4];
        userEvent.click(button0);
        userEvent.click(button1);
        userEvent.click(button2);
        userEvent.click(button3);
        userEvent.click(button4);

        await new Promise((resolve) => setTimeout(resolve, 1000));
    },

    render: (props) => <Rating {...props} />,
    args: {
        value: 3,
        max: 5,
        className: '',
        style: {},
    },
};
