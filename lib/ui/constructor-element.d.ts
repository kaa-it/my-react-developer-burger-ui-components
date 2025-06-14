type TProps = {
    text: string;
    thumbnail: string;
    price: number;
    type?: 'top' | 'bottom';
    isLocked?: boolean;
    extraClass?: string;
    handleClose?: () => void;
};
export declare const ConstructorElement: ({ type, text, thumbnail, price, isLocked, extraClass, handleClose }: TProps) => React.JSX.Element;
export {};
