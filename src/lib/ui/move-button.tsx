import clsx from 'clsx';
import type { HTMLProps } from 'react';
import './move-button.css';
import { ArrowDownIcon, ArrowUpIcon } from './icons';

type TProps = HTMLProps<HTMLDivElement> & {
    isUpDisabled: boolean;
    isDownDisabled: boolean;
    handleMoveDown: () => void;
    handleMoveUp: () => void;
    extraClass?: string;
};

export const MoveButton = ({
    isUpDisabled,
    isDownDisabled,
    handleMoveDown,
    handleMoveUp,
    extraClass,
    className,
    ...rest
}: TProps): React.JSX.Element => {
    const classNames = clsx('move_button_container', extraClass, className);

    return (
        <div className={classNames} {...rest}>
            <button className="move_button" disabled={isUpDisabled} onClick={handleMoveUp}>
                <ArrowUpIcon type={isUpDisabled ? 'disabled' : 'primary'} />
            </button>

            <button className="move_button" disabled={isDownDisabled} onClick={handleMoveDown}>
                <ArrowDownIcon type={isDownDisabled ? 'disabled' : 'primary'} />
            </button>
        </div>
    );
};
