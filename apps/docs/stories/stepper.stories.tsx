import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';


const meta: Meta<typeof Stepper> = {
    component: Stepper,
    title: 'Input/Stepper',
    argTypes: {
        steps: {
            control: 'object',
            description: 'Array of steps',
        },
        color: {
            control: 'select',
            options: [
                'green', 'blue','gray', 'red','yellow','indigo','purple','pink'
            ],
            
            description: 'Color of the stepper',
        },
        title: {
            control: 'text',
            description: 'Title of the stepper',
        },
        stepperType: {
            control: 'select',
            options: ['bullet-text', 'circle', 'dot', 'dot-text', 'panel', 'verticle', 'horizontal', 'circle-text'],
            description: 'Type of stepper',
            defaultValue: 'bullet-text',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '3rem' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['input', 'stepper', 'autodocs'],
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Primary: Story = {
    play: async ({ container }) => {
        const stepper = within(container).getByRole('stepper');
        const steps = within(stepper).getAllByRole('step');
        userEvent.click(steps[0]);
    },
    render: (args) => <Stepper {...args} />,
    args: {
        steps: [
            { status: 'complete', name: 'Step 1', href: '#', id: 1, stage: 1 },
            { status: 'current', name: 'Step 2', href: '#', id: 2, stage: 2 },
            { status: 'next', name: 'Step 3', href: '#', id: 3, stage: 3 },
        ],
        color: 'blue',
        title: 'Stepper Title',
    },
};