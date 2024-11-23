import classNames from 'classnames/bind';
import styles from './Label.module.scss';

const cx = classNames.bind(styles);

function Label({ className, title }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    
    return <label className={classes}>{title}</label>;
}

export default Label;
