import { SyntheticEvent } from '../../../node_modules/react';
export interface Props extends React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>> {
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    extraClass?: string;
    htmlType: 'button' | 'submit' | 'reset';
}
export declare const Button: ({ children, type, size, onClick, htmlType, extraClass, ...rest }: Props) => React.JSX.Element;
