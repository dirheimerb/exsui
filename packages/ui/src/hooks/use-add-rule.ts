'use client';
import { useState } from "react";
import Validator, { ValidationRule, config } from "../Forms/Validator";

export interface ReturnUseRules {
    addRule: () => void;
    removeRule: () => void;
    rules: ValidationRule[];
}

export default function useRules(rule: ValidationRule): ReturnUseRules {
    const [rules, setRules] = useState<ValidationRule[]>(config);    
    const validator = new Validator();

    function addRule() {
        validator.addRule(rule);
        setRules([...rules, rule]);
    }

    function removeRule() {
        validator.removeRule(rule.key);
        setRules(rules.filter(r => r.key !== rule.key));
    }

    return { addRule, removeRule, rules };
}