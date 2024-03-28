'use client';
import { useCallback, useEffect, useState } from "react";
import Validator from "../Forms/Validator";

export function useValidator() {
    const [validation, setValidation] = useState<Validator>(new Validator());

    const validate = useCallback(() => {
        return new Validator();
    }, []);

    useEffect(() => {
        setValidation(validate);
    }, [validate]);

    return {validation, validate};

}