type TIconTypes = 'secondary' | 'primary' | 'error' | 'success' | 'disabled';
export type TIconProps = {
    type: TIconTypes;
    className?: string;
    onClick?: () => void;
};
export declare const getIconColor: (type: TIconTypes) => string;
export {};
