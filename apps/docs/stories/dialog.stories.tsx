import type { Meta, StoryObj } from '@storybook/react';
import { Button, Dialog } from '@exsui/ui';
import React from 'react';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof Dialog> = {
    component: Dialog,
    argTypes: {
        open: {
            control: 'boolean',
        },
        setOpen: {
            control: 'function',
        },
        children: {
            control: 'object',
        },
        className: {
            control: 'text',
        },
        contentClassName: {
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
    title: 'Overlay/Dialog',
    tags: ['components', 'Overlay', 'dialog', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        userEvent.click(button);
        await canvas.findByText('Open Dialog');
    },
    render: (props) => {
        const [open, setOpen] = React.useState(false);

        return (
            <>
                <Button
                    Motion
                    onClick={() => setOpen(true)}
                    className="flex items-center justify-center rounded border-none bg-violet-500 p-2 text-gray-100 shadow-lg">
                    Open Dialog
                </Button>
                {open && (
                    <Dialog
                        {...props}
                        open={open}
                        setOpen={setOpen}>
                        <Dialog.Button className="rounded border bg-violet-500 p-2 text-gray-100">
                            My Button
                        </Dialog.Button>
                        <Dialog.Title className="m-2 p-2 text-2xl font-bold">My Title</Dialog.Title>
                        <Dialog.Description className="m-2 p-2 text-sm">My Description</Dialog.Description>
                        <Dialog.Close className="rounded border bg-violet-500 p-2 text-gray-100">My Close</Dialog.Close>
                    </Dialog>
                )}
            </>
        );
    },
};
