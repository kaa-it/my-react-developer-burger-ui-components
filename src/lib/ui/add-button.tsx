import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import './common-button.css';
import { PlusIcon } from './icons';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    extraClass?: string;
};

export const AddButton = ({
    text = 'Добавить',
    type = 'button',
    extraClass,
    className,
    ...rest
}: TProps): React.JSX.Element => {
    const classNames = clsx('common_button', extraClass, className);

    return (
        <button type={type} className={classNames} {...rest}>
            <PlusIcon type="primary" />
            {text}
        </button>
    );
};
