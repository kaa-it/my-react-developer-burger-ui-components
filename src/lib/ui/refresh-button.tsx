import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import './common-button.css';
import { RefreshIcon } from './icons';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    extraClass?: string;
};

export const RefreshButton = ({
    text = 'Обновить',
    type = 'button',
    extraClass,
    className,
    ...rest
}: TProps): React.JSX.Element => {
    const classNames = clsx('common_button', extraClass, className);

    return (
        <button type={type} className={classNames} {...rest}>
            <RefreshIcon type="primary" />
            {text}
        </button>
    );
};
