import { default as React } from '../../../node_modules/react';
interface TEmailInputInterface extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
    value: string;
    size?: 'default' | 'small';
    placeholder?: string;
    isIcon?: boolean;
    extraClass?: string;
    errorText?: string;
    checkValid?: (isValid: boolean) => void;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
export declare const EmailInput: ({ value, errorText, checkValid, onChange, size, placeholder, isIcon, extraClass, ...rest }: TEmailInputInterface) => React.JSX.Element;
export {};
