import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification({ className, text, error = false, success = false }) {
    const classes = cx('wrapper', {
        [className]: className,
        error,
        success,
    });
    return <span className={classes}>{text}</span>;
}

export default Notification;
