import type { Meta, StoryObj } from '@storybook/react';
import { FormItem } from '@exsui/ui';
import { userEvent, within } from '@storybook/test';



const booleanRegex = /^(true|false)$/;
const checkedRegex = /^(checked|unchecked)$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const uernameRegex = /^[a-zA-Z0-9_-]{3,16}$/
const phoneRegex = /^\d{10}$/;
const secureURLRegex = /^(https:\/\/)/;
const unsecureURLRegex = /^(http:\/\/)/;
const numberRegex = /^\d{1,}$/;
const requiredRegex = /^.{1,}$/;
const zipRegex = /^\d{5}(-\d{4})?$/
const stateRegex = /^[a-zA-Z]{2}$/
const countryRegex = /^[a-zA-Z',.\s-]{1,50}$/
const cityRegex = /^[a-zA-Z\s]{1,50}$/
const addressRegex = /^\d+\s[A-z]+\s[A-z]+/
// /^([01]\d|2[0-3]):?([0-5]\d)$/
const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
//  /^\d{4}-\d{2}-\d{2}$/
const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/
const stringRegex = /^[a-zA-Z\s]{1,50}$/
const minMaxLengthRegex = (length: number) => new RegExp(`^.{${length},}$`);

export const standardRulesObject = {
    boolean: booleanRegex,
    checked: checkedRegex,
    email: emailRegex,
    password: passwordRegex,
    phone: phoneRegex,
    secureURL: secureURLRegex,
    unsecureURL: unsecureURLRegex,
    number: numberRegex,
    required: requiredRegex,
    minLength: minMaxLengthRegex(8),
    maxLength: minMaxLengthRegex(8),
    zip: zipRegex,
    state: stateRegex,
    country: countryRegex,
    city: cityRegex,
    address: addressRegex,
    time: timeRegex,
    date: dateRegex,
    username: uernameRegex,
    string: stringRegex,
};


export const config = [
    {
        key: 'required',
        name: 'Required',
        rule: requiredRegex,
        message: 'This field is required',
    },
    {
        key: 'minLength',
        name: 'Minimum Length',
        rule: minMaxLengthRegex(8),
        message: 'Minimum length is 8 characters',
    },
    {
        key: 'maxLength',
        name: 'Maximum Length',
        rule: minMaxLengthRegex(8),
        message: 'Maximum length is 8 characters',
    },
    {
        key: 'email',
        name: 'Email',
        rule: emailRegex,
        message: 'Invalid email address',
    },
    {
        key: 'password',
        name: 'Password',
        rule: passwordRegex,
        message: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number',
    },
    {
        key: 'number',
        name: 'Number',
        rule: numberRegex,
        message: 'Invalid number',
    },
    {
        key: 'phone',
        name: 'Phone',
        rule: phoneRegex,
        message: 'Invalid phone number',
    },
    {
        key: 'url',
        name: 'URL',
        rule: unsecureURLRegex,
        message: 'Invalid URL',
    },
    {
        key: 'secureURL',
        name: 'Secure URL',
        rule: secureURLRegex,
        message: 'Invalid URL',
    },
    {
        key: 'boolean',
        name: 'Boolean',
        rule: booleanRegex,
        message: 'Invalid boolean',
    },
    {
        key: 'checked',
        name: 'Checked',
        rule: checkedRegex,
        message: 'Invalid checked status',
    },
    {
        key: 'unchecked',
        name: 'Unchecked',
        rule: checkedRegex,
        message: 'Invalid unchecked status',
    },
    {
        key: 'zip',
        name: 'Zip',
        rule: zipRegex,
        message: 'Invalid zip code',
    },
    {
        key: 'state',
        name: 'State',
        rule: stateRegex,
        message: 'Invalid state',
    },
    {
        key: 'country',
        name: 'Country',
        rule: countryRegex,
        message: 'Invalid country',
    },
    {
        key: 'city',
        name: 'City',
        rule: cityRegex,
        message: 'Invalid city',
    },
    {
        key: 'address',
        name: 'Address',
        rule: addressRegex,
        message: 'Invalid address',
    },
    {
        key: 'time',
        name: 'Time',
        rule: timeRegex,
        message: 'Invalid time',
    },
    {
        key: 'date',
        name: 'Date',
        rule: dateRegex,
        message: 'Invalid date',
    },
    {
        key: 'username',
        name: 'Username',
        rule: uernameRegex,
        message: 'Invalid username',
    },
    {
        key: 'string',
        name: 'String',
        rule: stringRegex,
        message: 'Invalid string',
    },
];

const meta: Meta<typeof FormItem> = {
    component: FormItem,
    argTypes: {
        label: {
            control: 'text',
            description: 'The label for the input field',
            defaultValue: 'Form Item'
        },
        validationKey: {
            control: 'select',
            options: [
                'required',
                'minLength',
                'maxLength',
                'email',
                'password',
                'number',
                'phone',
                'url',
                'boolean',
                'checked',
                'unchecked',
                'zip',
                'state',
                'country',
                'city',
                'address',
                'time',
                'date',
                'username',
                'string',
            ],
            defaultValue: 'string',
            description: 'The validation key for the input field',
        },
        type: {
            control: 'select',
            options: [
                'text',
                'password',
                'email',
                'number',
                'tel',
                'url',
                'date',
                'time',
                'datetime-local',
                'month',
                'week',
                'search',
                'color',
                'file',
                'range',
                'hidden',
                'checkbox',
                'radio',
                'submit',
                'reset',
                'button',
            ],
            defaultValue: 'text',
            description: 'The type of the input field',
        },
        value: {
            control: 'text',
            description: 'The value of the input field',
        },
        onChange: {
            control: 'function',
            description: 'The function to handle the input change event',
        },
        placeholder: {
            control: 'text',
            description: 'The placeholder for the input field',
        },
        rules: {
            control: 'object',
            defaultValue: config,   
            description: 'The rules for the input field',
        },
        className: {
            control: 'text',
            description: 'The class name for the input field',
        },
    },
    title: 'Input/FormItem',
};


export default meta;

type Story = StoryObj<typeof FormItem>;

const rules = {
    standardRules: config,
    customRules: [] as any,
}

export const Primary: Story = { 
    play: async ({ canvasElement }) => {
        const input = await within(canvasElement).findByRole('textbox');
        await userEvent.type(input, 'Hello World');
    },
    args: {
        label: 'Form Item',
        validationKey: 'required',
        type: 'text',
        value: '',
        onChange: (e) => console.log(e.target.value),
        placeholder: 'Enter your text here',
        className: '',
    },
    render: ({ label, validationKey, type, value, onChange, placeholder, className }) => (
        <FormItem
            label={label}
            validationKey={'string'}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rules={rules as any}
            className={className}
        />
    ),

};
