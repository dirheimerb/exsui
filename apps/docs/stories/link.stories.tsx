import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof Link> = {
    component: Link,
    argTypes: {
        link: {
            control: 'text',
        },
        target: {
            control: 'text',
        },
        children: {
            control: 'text',
        },
        isExternal: {
            control: 'boolean',
        },
        isDisabled: {
            control: 'boolean',
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
    tags: ['components', 'link', 'autodocs'],
    title: 'Components/Link',
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const span = canvas.getAllByTestId('exsui-link');
        console.log(span);
        await canvas.findByText('Link');
    },

    args: {
        link: '#',
        target: '_blank',
        children: 'Link',
        isExternal: false,
        isDisabled: false,
        className: 'text-blue-600',
    },
};