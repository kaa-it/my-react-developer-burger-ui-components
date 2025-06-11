import clsx from 'clsx';
import { useCallback, type ReactNode } from 'react';
import './tab.css';

type TProps = {
	active: boolean;
	value: string;
	onClick: (value: string) => void;
	children: ReactNode;
}

export const Tab  = ({ active, value, children, onClick: handleClick }: TProps): React.JSX.Element => {
	const className = clsx(
		'tab',
		{
			tab_type_current: active,
		},
		'pt-4',
		'pr-10',
		'pb-4',
		'pl-10',
		'noselect'
	);

	const onClick = useCallback(() => {
		if (typeof handleClick === 'function') {
			handleClick(value);
		}
	}, [handleClick, value]);

	return (
		<div className={className} onClick={onClick}>
			<span className="text text_type_main-default">{children}</span>
		</div>
	);
};
