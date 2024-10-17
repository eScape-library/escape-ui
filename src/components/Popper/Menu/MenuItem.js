import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button text className={cx('menu-item')} to="" leftIcon={data.icon} onClick={data.onClick}>
            {data.name}
        </Button>
    );
}

export default MenuItem;
