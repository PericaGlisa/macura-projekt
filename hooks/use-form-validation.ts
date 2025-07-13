'use client';

import { useState, useCallback } from 'react';

interface ValidationRules {
  required?: boolean;
  email?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
}

interface FieldConfig {
  [key: string]: ValidationRules;
}

export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  validationRules: FieldConfig
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const validateField = useCallback((name: keyof T, value: any): string => {
    const rules = validationRules[name as string];
    if (!rules) return '';

    if (rules.required && (!value || value.toString().trim() === '')) {
      return 'Ovo polje je obavezno';
    }

    if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Unesite validnu email adresu';
    }

    if (rules.minLength && value && value.toString().length < rules.minLength) {
      return `Minimum ${rules.minLength} karaktera`;
    }

    if (rules.maxLength && value && value.toString().length > rules.maxLength) {
      return `Maksimum ${rules.maxLength} karaktera`;
    }

    if (rules.pattern && value && !rules.pattern.test(value)) {
      return 'Format nije valjan';
    }

    return '';
  }, [validationRules]);

  const setValue = useCallback((name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField]);

  const setTouchedField = useCallback((name: keyof T) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, values[name]);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [values, validateField]);

  const validateAll = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};
    let isValid = true;

    Object.keys(validationRules).forEach(key => {
      const error = validateField(key as keyof T, values[key as keyof T]);
      if (error) {
        newErrors[key as keyof T] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(validationRules).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {}));

    return isValid;
  }, [values, validationRules, validateField]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    setValue,
    setTouchedField,
    validateAll,
    reset,
    isValid: Object.keys(errors).length === 0
  };
}