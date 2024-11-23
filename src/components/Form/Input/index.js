import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ className, type, name, placeholder, value, onChange }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <input
            className={classes}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
