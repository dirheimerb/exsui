export interface ValidationRule {
    key: string;
    name: string;
    rule: RegExp;
    message: string;
}
export interface CustomRules {
    [key: string]: ValidationRule;
}

export interface StandardRules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
    password?: boolean;
    number?: boolean;
    phone?: boolean;
    url?: boolean;
    boolean?: boolean;
    checked?: boolean;
    unchecked?: boolean;
    zip?: boolean;
    state?: boolean;
    country?: boolean;
    city?: boolean;
    address?: boolean;
    time?: boolean;
    date?: boolean;
    username?: boolean;
    string?: boolean;
}
export const standardRules: StandardRules = {
    required: true,
    minLength: 8,
    maxLength: 8,
    email: true,
    password: true,
    number: true,
    phone: true,
    url: true,
    boolean: true,
    checked: true,
    unchecked: true,
    zip: true,
    state: true,
    country: true,
    city: true,
    address: true,
    time: true,
    date: true,
    username: true,
    string: true,
};

function updateStandardRules(rules: StandardRules): StandardRules {
    return {
        ...standardRules,
        ...rules,
    };
}


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
const stringRegex = /^[a-zA-Z]{1,50}$/
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


export const config: ValidationRule[] = [
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

export type StandardRuleKey = 
| 'required' 
| 'minLength' 
| 'maxLength' 
| 'email' 
| 'password' 
| 'number' 
| 'phone' 
| 'url' 
| 'boolean' 
| 'checked' 
| 'unchecked' 
| 'zip' 
| 'state' 
| 'country' 
| 'city' 
| 'address' 
| 'time' 
| 'date' 
| 'username' 
| 'string';

class Validator {
    private _config: ValidationRule[];
    public customRules: CustomRules | undefined = undefined;
    public isValid: boolean = false;
    public errorMessage: string = '';
    
    standardRuleTypes: StandardRuleKey[] = [
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
    ]

    static getStandardRules(): StandardRules {
        return standardRules;
    }

    static fromJSON(json: string): Validator {
        const data = JSON.parse(json);        
        return new Validator(data.rules);
    }

    static fromFormData(data: FormData): Validator {
        const rules = JSON.parse(data.get('rules') as string);
        return new Validator(rules);
    }

    get config(): ValidationRule[] {
        return this._config;
    }

    set config(config: ValidationRule[]) {
        this._config = config;
    }

    constructor(customRules?: CustomRules) {
        this._config = config;
        this.customRules = customRules;
    }

    getStandardRuleKeys(): StandardRuleKey[] {
        return Object.keys(standardRules) as StandardRuleKey[];
    }

    addRule(rule: ValidationRule): void {
        // Check if it's a standard rule and update or add accordingly
        const exists = this._config.some(r => r.key === rule.key);
        if (exists) {
            this._config = this._config.map(r => r.key === rule.key ? rule : r);
        } else {
            // It's a custom rule
            this.customRules = { ...(this.customRules || {}), [rule.key]: rule };
        }
    }
    
    removeRule(key: string): void {
        this._config = this._config.filter(r => r.key !== key);
        if (this.customRules && key in this.customRules) {
            delete this.customRules[key];
        }
    }

    validate(value: string, key: StandardRuleKey): boolean | string {
        const rule = this._config.find(r => r.key === key) || this.customRules?.[key];
        if (!rule) {
            console.warn(`No validation rule found for key: ${key}`);
            return false;
        }
        
        const isValid = rule.rule.test(value);
        if(!isValid) {
            this.errorMessage = rule.message;
            this.isValid = false;
        } else {
            this.isValid = true;
            this.errorMessage = '';
        }
        return isValid ? true : rule.message;
    }

    getRuleErrorMessage(key: string): string {
        const rule = this._config.find(r => r.key === key) || this.customRules?.[key];
        return rule ? rule.message : '';
    }
    
    itemToJSON(item: string): string {
        if (!this.customRules) {
            return '';
        }
        return JSON.stringify(this.customRules[item]);
    }

    toJSON(): string {
        return JSON.stringify({
            config: this._config,
            rules: this.customRules,
        });
    }

    convertToFormData(): FormData {
        const data = new FormData();
        data.append('config', JSON.stringify(this._config));
        data.append('rules', JSON.stringify(this.customRules));
        return data;
    }
}

export default Validator;