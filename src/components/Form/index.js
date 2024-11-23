import classNames from 'classnames/bind';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function Form({ children, method = 'post', className, onSubmit, ...passProps }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const props = {
        onSubmit,
        ...passProps,
    };

    return (
        <form className={classes} method={method} {...props}>
            {children}
        </form>
    );
}

export default Form;
