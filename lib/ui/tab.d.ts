import { ReactNode } from '../../../node_modules/react';
type TProps = {
    active: boolean;
    value: string;
    onClick: (value: string) => void;
    children: ReactNode;
};
export declare const Tab: ({ active, value, children, onClick: handleClick }: TProps) => React.JSX.Element;
export {};
