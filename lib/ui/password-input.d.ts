interface TPasswordInputInterface extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
    value: string;
    placeholder?: string;
    size?: 'default' | 'small';
    icon?: 'HideIcon' | 'ShowIcon' | 'EditIcon';
    errorText?: string;
    checkValid?: (isValid: boolean) => void;
    extraClass?: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
export declare const PasswordInput: ({ value, placeholder, errorText, checkValid, onChange, size, icon, extraClass, ...rest }: TPasswordInputInterface) => React.JSX.Element;
export {};
