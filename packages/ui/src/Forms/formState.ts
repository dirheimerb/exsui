import { ValidationRule, config } from "./Validator";

export interface FormState {
  config: ValidationRule[];
  errors: {
    type: string;
    message: string;
  };
}

export type FormAction =
    | { type: 'VALIDATE_REQUEST'; key: string}
    | { type: 'VALIDATE_SUCCESS'; key: string; message: string}
    | { type: 'VALIDATE_FAILURE'; key: string; error: string }
    | { type: 'SET_FORM'; rules: ValidationRule[] }
    | { type: 'SET_ERROR'; key: string; error: string };


export const initialFormState: FormState = {
    config: config,
    errors: {
        type: '',
        message: '',
    },
};


export function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case 'VALIDATE_REQUEST':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.key]: '',
                },
            };
        case 'VALIDATE_SUCCESS':
            return state;
        case 'VALIDATE_FAILURE':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.key]: action.error,
                },
            };
        case 'SET_FORM':
            return {
                ...state,
                errors: {
                    type: '',
                    message: '',
                },
            };
        case 'SET_ERROR':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.key]: action.error,
                },
            };
        default:
            return state;
    }
}