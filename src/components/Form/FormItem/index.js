import classNames from 'classnames/bind';
import styles from './FormItem.module.scss';

const cx = classNames.bind(styles);

function FormItem({ className, children }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return <div className={classes}>{children}</div>;
}

export default FormItem;
