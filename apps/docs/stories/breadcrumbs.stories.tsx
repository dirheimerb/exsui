import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';

const meta: Meta<typeof Breadcrumbs> = {
    component: Breadcrumbs,
    argTypes: {
        fullWidth: {
            control: 'boolean',
            description: 'Full width of the breadcrumbs',
            defaultValue: false,
        },
        separator: {
            control: 'select',
            options: ['slash', 'chevron', 'arrow'],
            description: 'Separator of the breadcrumbs',
        },
        items: {
            control: {
                type: 'object',
                items: {
                    title: {
                        control: 'text',
                        description: 'Title of the breadcrumb',
                    },
                    href: {
                        control: 'text',
                        description: 'Href of the breadcrumb',
                    },
                },
            },
        },
    },
    title: 'Navigation/Breadcrumbs',
    tags: ['components', 'breadcrumbs', 'autodocs'],
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

type Story = StoryObj<typeof Breadcrumbs>;

export const Primary: Story = {
    render: (props) => <Breadcrumbs {...props} />,
    args: {
        fullWidth: false,
        separator: 'slash',
        items: [
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Category', href: '/products/category' },
            { label: 'Product', href: '/products/category/product' },
        ],
    },
};
