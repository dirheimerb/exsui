import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';
import MD from './assets/examples/md.png';
import Inkable from './assets/examples/inkable.png';
import OTP from './assets/examples/otp.png';
import UtilityTypes from './assets/examples/utilitytypes.png';
import Vcard from './assets/examples/vcard.png';
const meta: Meta<typeof Carousel> = {
    component: Carousel,
    argTypes: {
        items: {
            path: 'string',
            alt: 'string',
            caption: 'string',
            className: 'string',
        },
        autoPlayDelay: {
            control: 'number',
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
    title: 'Data Display/Carousel',
    tags: ['components', 'Data Display', 'carousel', 'autodocs'],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const carousel = within(canvasElement).getByRole('tablist');
        userEvent.click(carousel);
    },
    render: (props) => <Carousel {...props} />,
    args: {
        items: [
            {
                path: Inkable,
                alt: 'Slide 1',
                caption: 'Slide 1',
                className: '',
            },
            {
                path: MD,
                alt: 'Slide 2',
                caption: 'Slide 2',
                className: 'bg-contain object-fit scale-75',
            },
            {
                path: UtilityTypes,
                alt: 'Slide 4',
                caption: 'Slide 4',
                className: 'object-fit scale-75',
            },
            {
                path: Vcard,
                alt: 'Slide 5',
                caption: 'Slide 5',
                className: 'object-cover',
            },
        ],
    },
};
