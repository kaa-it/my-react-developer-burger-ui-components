import { default as React } from '../../../node_modules/react';
import { TIcons } from './icons';
interface TInputInterface extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
    value: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    success?: boolean;
    error?: boolean;
    disabled?: boolean;
    icon?: keyof TIcons;
    errorText?: string;
    size?: 'default' | 'small';
    extraClass?: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onIconClick?(e: React.MouseEvent<HTMLDivElement>): void;
    onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
    onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
}
export declare const Input: React.ForwardRefExoticComponent<Omit<TInputInterface, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
