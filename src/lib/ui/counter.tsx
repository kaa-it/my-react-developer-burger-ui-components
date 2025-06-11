import clsx from 'clsx';
import './counter.css';

type TProps = {
	count: number;
    size?: 'default' | 'small';
    extraClass?: string;
}

export const Counter = ({ count = 0, size = 'default', extraClass = '' }: TProps): React.JSX.Element => {
    const className = clsx(
        'counter',
        {
            [size]: size,
        },
        extraClass
    );

    return (
        <div className={className}>
            <p className="counter__num">{count}</p>
        </div>
    );
};
