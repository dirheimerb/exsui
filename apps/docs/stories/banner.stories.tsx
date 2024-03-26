import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '@exsui/ui';

const meta: Meta<typeof Banner> = {
    component: Banner,
    argTypes: {
        title: {
            control: 'text',
        },
        callToAction: {
            label: 'string',
            href: 'string',
        },
        dismissLabel: {
            control: 'text',
        },
        onDismiss: {
            control: 'function',
        },
        gradient: {
            from: 'string',
            to: 'string',
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
    title: 'Components/Banner',
    tags: ['components', 'banner', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
    args: {
        title: 'Join us for our annual conference',
        callToAction: {
            label: 'Register',
            href: 'https://example.com',
        },
        gradient: {
            from: 'from-[#ff80b5]',
            to: 'to-[#9089fc]',
        },
        dismissLabel: 'Dismiss',
        onDismiss: () => {
            console.log('Dismissed');
        },
    },
};
