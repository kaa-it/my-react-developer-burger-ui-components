import { getFormattedDate, isYesterday, isToday, getFormattedTime } from './formatted-date.utils';

export const FormattedDate = ({ date, className }: {
    date: Date;
    className?: string;
}): React.JSX.Element => {
    if (isToday(date)) {
        return <span className={className}>Сегодня, {getFormattedTime(date)}</span>;
    }

    if (isYesterday(date)) {
        return <span className={className}>Вчера, {getFormattedTime(date)}</span>;
    }

    return <span className={className}>{getFormattedDate(date)}</span>;
};
